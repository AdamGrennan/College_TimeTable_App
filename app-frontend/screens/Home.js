import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ClassDetailsButton from '../components/ClassDetailsButton';
import { ClassContext } from '../context/ClassContext';
import { groupClassesByDate } from '../components/GetDates';
import { requestNotificationPermissions, scheduleClassNotification } from '../utils/classNotifications';

function parseClassTime(timeString) {
    const [hours, minutes, seconds] = timeString.split(':');
    const now = new Date();
    const classDate = new Date();
    classDate.setHours(parseInt(hours, 10));
    classDate.setMinutes(parseInt(minutes, 10));
    classDate.setSeconds(parseInt(seconds, 10));
    classDate.setMilliseconds(0);
    classDate.setDate(now.getDate());
    return classDate;
}

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

    useEffect(() => {
        async function setupClassNotifications() {
            const permissionsGranted = await requestNotificationPermissions();
            console.log("Notification permissions granted:", permissionsGranted);

            if (permissionsGranted) {
                for (const classItem of classes) {
                    const classDate = parseClassTime(classItem.time);
                    console.log(`Processing class: ${classItem.title}, time: ${classItem.time}, parsedDate: ${classDate}`);

                    if (classDate > new Date()) {
                        console.log(`Scheduling notification for class ID: ${classItem.title}`);
                        await scheduleClassNotification(classItem);
                    } else {
                        console.log("Issue with class time:", classItem.time);
                    }
                }
            } else {
                console.log("Notification permissions not granted");
            }
        }
        setupClassNotifications();
    }, [classes]);

    return (
        <ScrollView className="flex-1 p-5 bg-white">
            <TouchableOpacity
                className="bg-springGreen p-2 rounded-3xl items-center mb-5"
                onPress={() => navigation.navigate('AddClass')}
            >
                <Text className="text-black text-base font-bold">Add Class</Text>
            </TouchableOpacity>
            {sortedDates.map(date => {
                const dateString = date.toDateString();
                return (
                    <View className="mb-5" key={dateString}>
                        <Text className="text-base font-bold mb-2">{dateString}</Text>
                        <View className="items-center">
                            {groupedClasses[dateString].map(classItem => (
                                <ClassDetailsButton
                                    key={classItem.id}
                                    classItem={classItem}
                                    navigation={navigation}
                                />
                            ))}
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
};
