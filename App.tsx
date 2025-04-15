import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './src/app/Home';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if(!fontsLoaded) {
    return <Loading/>
  }


  return (
    <View style={{flex:1}}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}
