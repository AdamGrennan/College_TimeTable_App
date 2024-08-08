import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../assets/Colors';
import { useNavigation } from '@react-navigation/native'; 

export default function ClassDetailsButton({ classItem }) {
  const navigation = useNavigation();

  console.log('ClassItem:', classItem);
  return (
    <View>
      <TouchableOpacity style={styles.btn}
       onPress={() => navigation.navigate('ClassDetails', { classItem })}>
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
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
      backgroundColor: Colors.SILVER,
      width: 300,
      height: 100,
      borderRadius: 24,
      marginTop: 20,
      textAlign:'center'
    },
    title:{
        justifyContent: 'center', // Centers text vertically
        alignItems: 'center', // Centers text horizontally
    },
    titleText:{
      color: '#fff',
      fontSize: 12,
    },
    description:{

    },
    descriptionText:{

    }
  });
  
