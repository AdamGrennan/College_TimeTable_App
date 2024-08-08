import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ClassDetailsButton from '../components/ClassDetailsButton';
import { ClassContext } from '../context/ClassContext';
import React, { useContext, useEffect, useState } from 'react';
import { groupClassesByDate } from '../components/GetDates';

export default function Home({ navigation }) {
    const { classes } = useContext(ClassContext);
    const [groupedClasses, setGroupedClasses] = useState({});

    useEffect(() => {
        const grouped = groupClassesByDate(classes);
        setGroupedClasses(grouped);
    }, [classes]);

    const sortedDates = Object.keys(groupedClasses)
        .map(dateString => new Date(dateString))
        .sort((a, b) => a - b);

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddClass')}>
                <Text style={styles.textStyle}>Add Class!</Text>
            </TouchableOpacity>
            {sortedDates.map(date => {
                const dateString = date.toDateString();
                return (
                    <View key={dateString} style={styles.dateGroup}>
                        <Text style={styles.dateTitle}>{dateString}</Text>
                        {groupedClasses[dateString].map(classItem => (
                            <ClassDetailsButton
                                key={classItem.id}
                                classItem={classItem}
                                navigation={navigation}
                            />
                        ))}
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    btn: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
    },
    dateGroup: {
        marginBottom: 20,
    },
    dateTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
