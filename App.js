import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

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
        <Image source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
          width: 128,
          height: 128,
        }}/>
        <StatusBar style="auto"/>
      </View>
    );

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2
  }
});
//react js의 css와 유사하다.