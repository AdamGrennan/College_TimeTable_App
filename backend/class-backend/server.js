const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/classes', (req, res) => {
    const query = 'SELECT * FROM classes';
    db.query(query, (error, result) => {
        if (error) {
            console.error('Error retrieving data from database:', error);
            res.status(500).json({ error: 'Failed to retrieve data' });
            return;
        }
        res.json(result);
    });
});

app.get('/get-class-time', (req, res) => {
    const query = 'SELECT time FROM classes WHERE id = ?';
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({ error: 'Class ID is required' });
    }

    db.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error retrieving data from database:', error);
            return res.status(500).json({ error: 'Failed to retrieve data' });
        }

        // Check if any result is returned
        if (results.length === 0) {
            return res.status(404).json({ error: 'Class not found' });
        }

        // Send the time from the first result
        const classTime = results[0].time;
        res.json({ time: classTime });
    });
});



app.post('/classes', (req, res) => {
    const { id, title, description, time, day, room, instance_id } = req.body;
    const query = 'INSERT INTO classes (id, title, description, time, day, room) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [id, title, description, time, day, room, instance_id];

    db.query(query, values, (error) => {
        if (error) {
            console.error('Error adding class to database:', error);
            res.status(500).json({ error: 'Failed to add class' });
            return;
        }
        res.status(201).json({ message: 'Class added successfully' });
    });
});

app.patch('/classes', (req, res) => {
    const { id, title, description, time, day, room } = req.body;
    const query = 'UPDATE classes SET title = ?,  description = ?,  time = ?,  day = ?,  room = ? WHERE id = ?';
    const values = [title, description, time, day, room, id];

    db.query(query, values, (error) => {
        if (error) {
            console.error('Error updating class:', error);
            res.status(500).json({ error: 'Failed to update class' });
            return;
        }
        res.status(201).json({ message: 'Class updated successfully' });
    });
});

app.delete('/classes/:id', (req, res) => {
    const { id } = req.params;
    console.log('Deleting class with ID:', id);
    const query = 'DELETE FROM classes WHERE id = ?';

    db.query(query, [id], (error) => {
        if (error) {
            console.error('Error deleting class at server:', error);
            res.status(500).json({ error: 'Failed to delete class' });
            return;
        }
        res.status(204).send();
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
