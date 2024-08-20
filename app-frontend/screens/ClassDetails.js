import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DeleteClassModal } from '../components/DeleteClassModal';
import { ClassContext } from '../context/ClassContext';

export default function ClassDetails({ route, navigation }) {
  const { classItem } = route.params;
  const { deleteClasses, markClass } = useContext(ClassContext);
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const removeClass = async () => {
    try {
      await deleteClasses(classItem.id);
      hideModal();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error deleting class at details:', error);
    }
  };

  // Function to mark class
  const markedClass = () => {
    markClass(classItem.id);
  };


  return (
    <View className="p-4 bg-gray-100 rounded-lg">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => navigation.navigate('EditClass', { classItem })}>
          <Feather name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showModal}>
          <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
        </TouchableOpacity>
        <DeleteClassModal modalVisible={modalVisible} onClose={hideModal} onDelete={removeClass} />
      </View>

      <View className="justify-center items-center mb-6">
        <Text className="text-xl font-bold text-gray-800">{classItem.title}</Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-gray-700 mb-2">Description</Text>
        <View className="bg-white px-4 py-3 rounded-2xl w-full shadow-sm">
          <Text className="text-gray-700">{classItem.description}</Text>
        </View>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-gray-700 mb-2">Time</Text>
        <Text className="text-gray-800">{classItem.time}</Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-gray-700 mb-2">Day</Text>
        <Text className="text-gray-800">{classItem.day}</Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-gray-700 mb-2">Room</Text>
        <Text className="text-gray-800">{classItem.room}</Text>
      </View>

      <View className="flex-row items-center justify-between mt-4">
        <Text className="text-gray-700 font-semibold">Has Exam:</Text>
        <TouchableOpacity className="bg-yellow-600" onPress={(markedClass)}>
          <Text>Exam</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
