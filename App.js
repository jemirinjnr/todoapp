import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Todoheader from "./components/Todoheader"
import Todolist from './components/Todolist';

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <Todoheader />
        <Todolist />
      </SafeAreaView>
    );
  };

  return (
    <View>
      <RootApp />
    </View>
  );
}


