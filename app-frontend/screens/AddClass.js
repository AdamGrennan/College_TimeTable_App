import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ClassContext } from '../context/ClassContext';
import uuid from 'react-native-uuid';
import TimePicker from '../components/TimePicker';
import { DayDropDown } from '../components/DayDropDown';

export default function AddClass({ navigation }) {
    const { addClasses } = useContext(ClassContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('Monday');
    const [room, setRoom] = useState('');
    const [exam, setExam] = useState(false);

    const newAddClass = async () => {
        const id = uuid.v4();
        const classData = { id, title, description, time, day, room };

        try {
            await addClasses(classData);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error adding class:', error);
        }
    };

    return (
        <View className="flex-1 p-5 bg-gray-100">
            <Text className="font-bold">Class Name</Text>
            <TextInput className="bg-white border border-SILVER p-2 mb-5" value={title} onChangeText={setTitle} />
            <Text className="font-bold">Description</Text>
            <TextInput className="bg-white border border-SILVER p-3 mb-5 h-30"
                multiline={true}
                numberOfLines={4}
                value={description}
                onChangeText={setDescription} />
            <Text className="font-bold">Time</Text>
            <TimePicker value={time} onChange={setTime} />
            <Text className="font-bold">Day</Text>
            <DayDropDown value={day} onChange={setDay} />
            <Text className="font-bold">Room</Text>
            <TextInput className="bg-white border border-SILVER p-2 mb-8" value={room} onChangeText={setRoom} />
            <TouchableOpacity className="bg-springGreen p-2 rounded-3xl items-center" onPress={newAddClass}>
                <Text className="text-black text-base font-bold">Add Class</Text>
            </TouchableOpacity>
        </View>
    );
}
