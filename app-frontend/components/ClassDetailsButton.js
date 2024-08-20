import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ClassDetailsButton({ classItem }) {
  const navigation = useNavigation();

  return (
    <View className="items-center my-2">
      <TouchableOpacity
        className="bg-skyBlue px-4 py-3 rounded-3xl min-w-full items-center justify-center"
        onPress={() => navigation.navigate('ClassDetails', { classItem })}
      >
        <Text className="text-white text-lg font-bold text-center mb-1">
          {classItem.title}
        </Text>
        <Text className="text-white text-sm text-center mb-1">
          {classItem.description}
        </Text>
        <Text className="text-white text-xs text-center">
          Time: {classItem.time}
        </Text>
        <Text className="text-white text-xs text-center">
          Room: {classItem.room}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
