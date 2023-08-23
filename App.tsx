

import { useFonts,Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import { StatusBar,SafeAreaView } from 'react-native';
import Carrinho from './src/pages/Carrinho';

export default function App() {

  const [fonteCarregada]=useFonts({
"Montregular": Montserrat_400Regular,
"Montbold":Montserrat_700Bold,
"Montitalico":Montserrat_400Regular_Italic

  })
if(!fonteCarregada){
  return null;
}

  return (
 <SafeAreaView>
  <StatusBar  />
  <Carrinho/>


 </SafeAreaView>



  );
}


