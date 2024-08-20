import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { ClassProvider } from './context/ClassContext';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
      <ClassProvider>
        <AppNavigator />
      </ClassProvider>
    </>
  );
};

registerRootComponent(App);

export default App;
