import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const DeleteClassModal = ({ modalVisible, onClose, onDelete }) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}>

      <View>
        <View className="bg-white m-5 rounded-2xl p-9 items-center shadow-md">
          <Text className="rounded-3xl p-2">Remove class from schedule?</Text>
          <View className="flex-row justify-between items-center w-full px-4">
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
              <AntDesign name="check" size={24} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
