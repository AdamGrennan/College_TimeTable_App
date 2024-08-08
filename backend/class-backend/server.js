const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const db = require('./db'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 


app.get('/classdetails', (req, res) => {
    const query = 'SELECT * FROM classdetails';
    db.query(query, (error, result) => {
        if (error) {
            console.error('Error retrieving data from database:', error);
            res.status(500).json({ error: 'Failed to retrieve data' });
            return;
        }
        res.json(result); 
    });
});


app.post('/classdetails', (req, res) => {
    const { id, title, description, time, day, room } = req.body;
    const query = 'INSERT INTO classdetails (id, title, description, time, day, room) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [id, title, description, time, day, room];

    db.query(query, values, (error) => {
        if (error) {
            console.error('Error adding class to database:', error);
            res.status(500).json({ error: 'Failed to add class' });
            return;
        }
        res.status(201).json({ message: 'Class added successfully' }); 
    });
});

app.patch('/classdetails', (req, res) => {
    const { id, title, description, time, day, room } = req.body;
    const query = 'UPDATE classdetails SET title = ?,  description = ?,  time = ?,  day = ?,  room = ? WHERE id = ?';
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

app.delete('/classdetails/:id', (req, res) => {
    const { id } = req.params;
    console.log('Deleting class with ID:', id); 
    const query = 'DELETE FROM classdetails WHERE id = ?';
    
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
