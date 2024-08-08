import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Colors from '../assets/Colors';
import TimePicker from '../components/TimePicker';
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
        navigation.navigate('ClassDetails');
    } catch (error) {
        console.error('Error updating class:', error);
    }
};

    return (
         <View style={styles.container}>
      <Text>Class Name</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle}></TextInput>
      <Text>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription}></TextInput>
      <Text>Time</Text>
      <TimePicker value={time} onChange={setTime}/>
      <Text>Room</Text>
      <TextInput style={styles.input} value={room} onChangeText={setRoom}></TextInput>
      <TouchableOpacity style={styles.btn} onPress ={(handleUpdate)}>
        <Text>Add Class</Text>
      </TouchableOpacity>
    </View>
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      input:{
        backgroundColor: Colors.SILVER,
      },
      btn:{
        backgroundColor: '#0000FF',
          width: 200,
          height: 50,
          borderRadius: 24,
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign:'center'
      }
    });