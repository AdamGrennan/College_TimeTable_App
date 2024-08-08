import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ClassContext } from '../context/ClassContext';
import { addClass } from '../api';
import uuid from 'react-native-uuid';
import TimePicker from '../components/TimePicker';
import DayDropDown from '../components/DayDropDown';

export default function AddClass({ navigation }) {
    const { setClasses } = useContext(ClassContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('Monday');
    const [room, setRoom] = useState('');

    const newAddClass = async () => {
        const id = uuid.v4();
        const classDetails = { id, title, description, time, day, room};
        
        try {
            await addClass(classDetails);
            setClasses(prevClasses => [...prevClasses, classDetails]);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error adding class:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Class Name</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} />
            <Text>Time</Text>
            <TimePicker value={time} onChange={setTime} />
            <Text>Day</Text>
            <DayDropDown value={day} onChange={setDay} />
            <Text>Room</Text>
            <TextInput style={styles.input} value={room} onChangeText={setRoom} />
            <TouchableOpacity style={styles.btn} onPress={newAddClass}>
                <Text>Add Class</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});
