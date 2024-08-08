import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../assets/Colors';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeleteClassModal from '../components/DeleteClassModal';
import { ClassContext } from '../context/ClassContext';

export default function ClassDetails({ route, navigation }) {
  const { classItem } = route.params;
  const { deleteClasses, markClass } = useContext(ClassContext);
  const[modalVisible, setModalVisible] = useState(false);

  const showModal = () =>{
    setModalVisible(true);
  };

  const hideModal = () =>{
    setModalVisible(false);
  };

  const removeClass = async() =>{  
    try {
      await deleteClasses(classItem.id);
      hideModal();
      navigation.navigate('Home');
  } catch (error) {
      console.error('Error deleting class at details:', error);
  }
  }

    // Function to mark class
    const markedClass = () => {
      markClass(classItem.id);
    };
  

  return (
    <View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate('EditClass', { classItem })}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={(showModal)}>
          <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
        </TouchableOpacity>
        <DeleteClassModal modalVisible={modalVisible} onClose={hideModal} onDelete={removeClass}/>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{classItem.title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{classItem.description}</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeText}>{classItem.time}:</Text>
      </View>
      <View style={styles.room}>
        <Text style={styles.roomText}>{classItem.room}:</Text>
      </View>
      <View>
      <Text>Has Exam:</Text>
      <Switch value={classItem.mark} 
      onValueChange={markedClass}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.SILVER,
    width: 300,
    height: 100,
    borderRadius: 24,
    marginTop: 20,
    textAlign: 'center'
  },
  title: {
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
  },
  titleText: {
    color: '#fff',
    fontSize: 12,
  },
  description: {

  },
  descriptionText: {

  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center the icons vertically
  },
});