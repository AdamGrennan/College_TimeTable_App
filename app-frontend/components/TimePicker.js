
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function TimePicker({value, onChange}) {
  const [isVisible, setIsVisible] = useState(false);

  const showTimePicker = () => setIsVisible(true);

  const hideTimePicker = () => setIsVisible(false);

  const handleConfirm = (time) => {
    hideTimePicker();
    onChange(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  return (
    <View>
      <TouchableOpacity 
        onPress={showTimePicker} 
        className="bg-white border border-SILVER p-2 mb-5"
      >
        <Text className="text-black text-base">{value}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};
