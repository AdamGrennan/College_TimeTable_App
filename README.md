# College Timetable Manager

A personal React Native application designed to help manage my college timetables. The app displays classes, provides details, and sends notifications for upcoming classes.  This project is intended for review by potential employers.

## Features

- **Class Management**: View and manage my college timetable.
- **Class Notifications**: Get notified 10 minutes before a class starts.
- **Exam Tracking**: Mark and track classes for upcoming exams (In Development).
- **Tailwing Design**: Utilizes Tailwind CSS for responsive UI.

## Technologies Used

- **React Native**: Framework for building the mobile app.
- **Tailwind CSS**: Adaptive CSS framework for styling.
- **MySQL**: Database for storing class information and user data.
- **JavaScript**: For easy to understand logic.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AdamGrennan/College_TimeTable_App.git

2. **Navigate to app-frontend:**

   ```bash
   cd "app-frontend"

3. **Install expo(if not already done):**

   ```bash
   npm install -g expo-cli

4. **Install dependincies:**

   ```bash
   npm install

5. **Navigate to app-frontend:**

- Ensure MySQL is installed and running.
- Create a database and import schema.sql

6. **Add credentials in db.js:**

   ```bash
    host: 'localhost',
    user: 'yoususername',
    password: 'yourpassword',
    database: 'college_timetable'

7. **Launch the app:**

   ```bash
    npx expo start

## Future Additions

- Mark class for exam
- Cancel a class
- Switch from MySQL to Firebase 
