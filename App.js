import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
      // send to API and get weather
      console.log('zzzzzzzzzz');
    } catch (error) {
      Alert.alert('찾을 수 없다.', 'ㅠㅠ');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading></Loading> : null;
  }
}
