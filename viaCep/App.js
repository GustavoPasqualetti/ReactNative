
import { useFonts, RobotoSlab_500Medium, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { Header } from './src/components/Header';

import { ContainerApp } from './styles';
import { Home } from './src/screens/Home';
import { Platform } from 'react-native';

export default function App() {
  
  const[fontsLoaded, fontError] = useFonts({
    RobotoSlab_500Medium, RobotoSlab_700Bold
  })

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <ContainerApp behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <Header/>
      <Home/>
    </ContainerApp>

    
  );
}