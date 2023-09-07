import { SafeAreaView } from 'react-native';
import Todoheader from "./components/Todoheader"
import Todolist from './components/Todolist';

import store  from './redux/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}


