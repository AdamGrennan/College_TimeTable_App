
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
    <View style={styles.container}>
      <TouchableOpacity onPress={showTimePicker} style={styles.btn}>
      <Text style ={styles.btn}>Selected Time: {value}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
