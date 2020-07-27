import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

const state = {
  counter: 0,
}

export default class App extends React.Component {
  state = {
    counter: 0,
  };

  render(){
    const clickHandler = () => {
      state.counter ++;
      console.log(state.counter)
    }
    return (
      <View style={styles.container}>
        <Text>{state.counter}</Text>
        <Button
          title={"Click me!"}
          onPress={clickHandler}
        />
        <StatusBar style="auto" />
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