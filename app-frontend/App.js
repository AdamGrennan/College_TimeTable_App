import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { ClassProvider } from './context/ClassContext';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
      <ClassProvider>
        <AppNavigator />
      </ClassProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Register the main component
registerRootComponent(App);

export default App;
