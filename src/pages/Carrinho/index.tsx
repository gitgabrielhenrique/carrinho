import React from "react";
import { Dimensions, View } from "react-native";
import{Text,Image,StyleSheet} from 'react-native'
import topo from'../../../assets/topo.png'


const width = Dimensions.get('screen').width


export  default function Carrinho(){
return<>

<Image source={topo} style={estilos.topo}></Image>
<Text style={estilos.titulo}>Detalhes do carrinho</Text>
<View style={estilos.carrinho}>
<Text style={estilos.nome}>carrinho de compras</Text>
</View>

</>
}

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
  },
  carrinho:{
paddingVertical:8,
paddingHorizontal:16
  },
  nome:{
    fontSize:26,
    lineHeight:42,
    color:"#464646"
  }
})

