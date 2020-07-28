import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

/*class CounterButton extends React.Component {
  static defaultProps = {
    counter: -1,
  };
  constructor(props){
    super(props);

    this.state = {
      counter: props.counter,
    };
  }
  clickHandler = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }

  render(){
    return (
      <View style={styles.buttonContainer}>
        <Text>{this.state.counter}</Text>
        <Button
          title={"Click Me"}
          onPress={this.clickHandler}
        />
      </View>
    );

  }


}*/

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>1</Text>
        <Text style={styles.Text}>2</Text>
        <Text style={styles.Text}>3</Text>
        <StatusBar style="auto"/>
      </View>
    );

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textBig: {
    fontSize: 32,
    color: 'red'
  },
  /*buttonContainer: {
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'blue'
  }*/
  text : {
    borderWidth: 1,
    borderColor: 'red'
  }
});
//react js의 css와 유사하다.