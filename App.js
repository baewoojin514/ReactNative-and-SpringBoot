import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CityList from './CityList';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CityList/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
//react js의 css와 유사하다.