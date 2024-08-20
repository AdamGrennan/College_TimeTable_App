import * as Notifications from 'expo-notifications';
import axios from 'axios';

const api = axios.create({
  baseURL: '.',
});

export async function requestNotificationPermissions() {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
}

export async function fetchClassTime(classItem) {
    try {
        const classId = classItem.id; 

        const response = await api.get(`/get-class-time`, {
            params: { id: classId}
        });
        const data = response.data;

        if (data && data.time) {
            const [hours, minutes, seconds] = data.time.split(':');

            const classDate = new Date();
            classDate.setHours(hours);
            classDate.setMinutes(minutes);
            classDate.setSeconds(seconds);

            return classDate; 
        } else {
            throw new Error("Invalid time data received");
        }
    } catch (error) {
        console.error("Error fetching class time from the database:", error);
        throw error;
    }
};

export async function scheduleClassNotification(classItem) {
    try {
        const classTime = await fetchClassTime(classItem);
        console.log(`Fetched class time for ${classItem.title}: ${classTime}`);

        if (classTime) {
            const notificationTime = new Date(classTime.getTime() - 10 * 60 * 1000);
            console.log(`Notification time calculated: ${notificationTime}`);

            if (notificationTime > new Date()) {
                await Notifications.scheduleNotificationAsync({
                    content: {
                        title: classItem.title,
                        body: `Class starting in 10 minutes!, ${classItem.time}`
                    },
                    trigger: notificationTime,
                });
                console.log(`Notification scheduled for ${notificationTime}`);
            } else {
                console.log("The class time is too close or has already passed. No notification scheduled.");
            }
        }
    } catch (error) {
        console.error("Error scheduling notification:", error);
    }
}


export async function cancelAllNotifications() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log("All notifications cancelled.");
}
