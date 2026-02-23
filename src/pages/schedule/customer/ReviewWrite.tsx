import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function ReviewWrite(): JSX.Element {
  const navigation = useNavigation<any>();

  const [showPopup, setPopup] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: '5%',
          alignItems: 'center',
        }}>
        <Image source={require('@/assets/images/hanmaum.png')} />
        <Text style={{fontSize: 16, fontWeight: '700', paddingTop: '4%'}}>
          한마음인테리어
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: '5%',
          paddingBottom: '2%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Image source={require('@/assets/images/dummythum.png')} />
          <Text style={{paddingLeft: '5%', fontSize: 14}}>호이</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: '5%',
          paddingRight: '5%',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: '#F8F8F8',
            width: '100%',
            paddingTop: '5%',
            paddingBottom: '5%',
            paddingLeft: '3%',
            paddingRight: '3%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View
              style={{
                width: Dimensions.get('window').width * 0.15,
                height: Dimensions.get('window').width * 0.15,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#E9EDEF',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('@/assets/images/camera.png')} />
            </View>
            <View
              style={{
                width: Dimensions.get('window').width * 0.15,
                height: Dimensions.get('window').width * 0.15,
                borderRadius: 5,
                backgroundColor: '#E9EDEF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('@/assets/images/picture-icon.png')} />
            </View>
            <View
              style={{
                width: Dimensions.get('window').width * 0.15,
                height: Dimensions.get('window').width * 0.15,
                borderRadius: 5,
                backgroundColor: '#E9EDEF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('@/assets/images/picture-icon.png')} />
            </View>
            <View
              style={{
                width: Dimensions.get('window').width * 0.15,
                height: Dimensions.get('window').width * 0.15,
                borderRadius: 5,
                backgroundColor: '#E9EDEF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('@/assets/images/picture-icon.png')} />
            </View>
            <View
              style={{
                width: Dimensions.get('window').width * 0.15,
                height: Dimensions.get('window').width * 0.15,
                borderRadius: 5,
                backgroundColor: '#E9EDEF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('@/assets/images/picture-icon.png')} />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '5%',
            }}>
            <TextInput
              multiline
              style={{
                width: Dimensions.get('window').width * 0.85,
                height: Dimensions.get('window').width * 0.4,
                backgroundColor: 'white',
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '5%',
          }}>
          <View
            style={{
              paddingLeft: '6%',
              paddingRight: '6%',
              paddingTop: '3%',
              paddingBottom: '3%',
              borderRadius: 10,
              backgroundColor: '#2CB07B',
            }}>
            <Text style={{color: 'white'}}>등록</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    //justifyContent: 'center',
    //alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
});
