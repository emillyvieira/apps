import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

export default class MimimiProject extends Component {

  constructor(props){
    super(props);
    this.state = {texto1:'Texto 1', texto2:'Texto 2'}


  this.escrever = this.escrever.bind(this)

  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase()

    novoTexto = novoTexto.replace(/(a|e|o|u)/g, 'i')
    novoTexto = novoTexto.replace(/(á|à|â|ã)/g, 'i')
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i')
    novoTexto = novoTexto.replace(/(õ|ó|ò|ô)/g, 'i')
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i')

    return novoTexto;
  }

  escrever(t) {
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);

    this.setState(s)
  }

  render() {

    return(
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>CRIADOR DE MIMIMI</Text>

          <View style={styles.inputArea}>
            <TextInput style={styles.input} placeholder='Digite aqui seu mimimi' onChangeText={this.escrever}/>
          </View>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.guri} source={require('./img/guri.jpg')}/>
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#FA6800',
    paddingTop:20,
    alignItems:'center',
    flex:1,
    flexDirection:'column',
    fontFamily:''
  },
  title:{
    paddingTop:30,
    fontSize:25,
    color:'lightyellow',
    textAlign:'center',
    fontWeight:'bold'
  },
  inputArea:{
    alignSelf:'stretch',
  },
  input:{
    backgroundColor:'orange', 
    borderWidth:1,
    borderColor:'orange',
    borderRadius:10,
    color:'khaki',
    fontSize:15,
    height:35,
    margin:20,
    padding:10,
  },
  guri:{
    height:256,
    width:256,
    marginTop:-70,
    borderRadius:10,
  },
  logo:{
    width:120,
    height:120,
    borderRadius:90
  },
  texto:{ 
    backgroundColor:'transparent',
    color:'white',  
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    padding:25,
    stroke: 'black'
    
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  }
});
