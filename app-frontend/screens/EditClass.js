import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import TimePicker from '../components/TimePicker';
import { DayDropDown } from '../components/DayDropDown';
import { ClassContext } from '../context/ClassContext';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function EditClass( {} ) {
  const { updateClasses } = useContext(ClassContext);
  const route = useRoute();
  const navigation = useNavigation();
  const [id, setID] = useState(null);
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[time, setTime] = useState("");
  const [day, setDay] = useState("");
  const[room, setRoom] = useState("");

  useEffect(() =>{
    const classItem = route.params?.classItem;
    if(classItem){
      setID(classItem.id);
      setTitle(classItem.title);
      setDescription(classItem.description);
      setTime(classItem.time);
      setDay(classItem.day);
      setRoom(classItem.room);
    }
  },[route.params?.classItem]);

  const handleUpdate = async () => {   
    const classDetails = {id, title, description, time, day, room};
    try {
        await updateClasses(classDetails);
        navigation.navigate('ClassDetails', {classItem : classDetails});
    } catch (error) {
        console.error('Error updating class:', error);
    }
};

    return (
         <View className="flex-1 p-5 bg-gray-100">
      <Text className="font-bold">Class Name</Text>
      <TextInput className="bg-white border border-SILVER p-2 mb-5" value={title} onChangeText={setTitle}></TextInput>
      <Text className="font-bold">Description</Text>
      <TextInput className="bg-white border border-SILVER p-2 mb-5"  value={description} onChangeText={setDescription}></TextInput>
      <Text className="font-bold">Time</Text>
      <TimePicker value={time} onChange={setTime}/>
      <Text className="font-bold">Day</Text>
      <DayDropDown value={day} onChange={setDay}/>
      <Text className="font-bold">Room</Text>
      <TextInput className="bg-white border border-SILVER p-2 mb-5" value={room} onChangeText={setRoom}></TextInput>
      <TouchableOpacity className="bg-springGreen p-2 rounded-3xl items-center" onPress ={(handleUpdate)}>
        <Text className="text-black text-base font-bold">Save Details</Text>
      </TouchableOpacity>
    </View>
      );
    };
    
