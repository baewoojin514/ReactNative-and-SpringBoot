import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

class CounterButton extends React.Component {
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
      <View>
        <Text>{this.state.counter}</Text>
        <Button
          title={"Click me!"}
          onPress={this.clickHandler}
        />
        <StatusBar style="auto" />
      </View>
    );

  }


}

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <CounterButton counter={1}/>
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
  },
  textBig: {
    fontSize: 32,
    color: 'red'
  }
});
//react js의 css와 유사하다.