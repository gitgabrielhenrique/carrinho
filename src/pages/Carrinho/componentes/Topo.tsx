import React from "react";
import{Text,Image,StyleSheet,Dimensions} from 'react-native'
import topo from '../../../../assets/topo.png'
export default function Topo() {
  return<>
<Topo/>
<Image source={topo} style={estilos.topo}></Image>
<Text style={estilos.titulo}>Detalhes do carrinho</Text>
  </>
}
const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
  topo:{
    width: "100%",
    height:578/768*width,
  },
    titulo:{
      width:"100%",
      position: "absolute",
      color:"White",
      textAlign:"center",
      fontSize:24,
      lineHeight:26,
      padding:16,
      fontFamily:"Montitalico"
    }

  })
