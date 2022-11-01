import React, { Component } from 'react';
// importa do react, o proprio react e o Component que é 
// o componente/class principal de um App

import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
// importa os componentes preexistentes do react native

export default class meuApp extends Component {

  // constructor - para habilitar a alteração das props por meio das states
  constructor(props){
    super(props);
    this.state = {num1:'', num2:'', s:'', r:''};
    // criação/definição das states(variáveis)

    this.apertouBotao = this.apertouBotao.bind(this);
    // habilitar a alteração dos valores das states pela função apertouBotao
  }
    
  // função ao ser executada ao apertar o botão
  apertouBotao() {

    let s = this.state.s; // atribui osvalores das states a variavel s
    let num1 = this.state.num1
    let num2 = this.state.num2
    let t = this.state

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (s == '+') {
      t.r = num1 + num2}

    else if (s == '-') {
      t.r = num1 - num2}

    else if (s == '*') {
      t.r = num1 * num2}

    else if (s == '/') {
      t.r = num1 / num2}

    this.setState(t); // define os novos valores para as states
  }

  
  render (){
    return(
      <View style={styles.view1}>
        <Text style={{fontSize:30}}>CALCULADORA</Text>
        <Text style={{paddingTop:5}}>Informe o primeiro número:</Text>
        <TextInput style={styles.input} onChangeText={(num1)=>{this.setState({num1})}}/>
        {/*(num1)=>{this.setState({num1})} - função anônima que irá definir um valor (valor digitado) para a state num1*/}

        <Text>Informe a operação( + | - | * | / ):</Text>
        <TextInput style={styles.input} onChangeText={(s)=>{this.setState({s})}}/>

        <Text>Informe o segundo número:</Text>
        <TextInput style={styles.input} onChangeText={(num2)=>{this.setState({num2})}}/>

        <Button style={styles.botao} title="CALCULAR" onPress={this.apertouBotao}/>
        {/* this.apertouBotao - executar funcão */}

        <Text style={{paddingTop:15, fontSize:20}}>O resultado do calculo é:</Text>
        <Text style={styles.texto}>{this.state.r}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    height:60,
    width:70,
    borderWidth:1,
    borderRadius:15,
    borderColor:"silver",
    margin:10,
    padding:10,
    textAlign:'center'
  },
  texto:{
    fontSize:20,
    textAlign:'center',
  },
  botao:{
    width:40,
    height:40
  },
  view1:{
    paddingTop:30,
    alignItems:'center',
  }
});
