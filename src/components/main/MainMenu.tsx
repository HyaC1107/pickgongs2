import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomTextInput from '../../components/textinput/TextInput';
import PssWdTextInput from '../../components/textinput/PsswdTextInput';
import {
  RouteProp,
  StackNavigationState,
  TypedNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export interface MenuListProp {
  data: {
    src: any;
    disc: string;
    isSelected?: boolean;
  }[];
  handleData?: (list: MenuItemPorp[], item: MenuItemPorp) => void;
  fullpage: boolean;
}
export interface MenuItemPorp {
  src: any;
  disc: string;
  isSelected?: boolean;
}
export default function MainMenu(menuprop: MenuListProp): JSX.Element {
  const {data, fullpage, handleData} = menuprop;
  const navigation = useNavigation<any>();
  const [showMore, setState] = useState(false);
  const [isClick, setClick] = useState(false);
  const router = useRoute();
  useEffect(() => {}, [isClick]);
  return (
    <View
      key={1}
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.rootWrapper}>
        {data.map((el: MenuItemPorp, i) => {
          if ((i < 8 || showMore) && !fullpage)
            return (
              <TouchableWithoutFeedback
                key={i}
                onPress={() => {
                  navigation.navigate('FindService', {headerValue: el.disc});
                }}>
                <View
                  key={i}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2%',
                  }}>
                  <View
                    style={{
                      width: 60,
                      margin: '1%',
                      height: 60,
                      borderRadius: 100,
                      backgroundColor: '#F9F9F9',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '5%',
                    }}>
                    <Image source={el.src} />
                  </View>
                  <Text style={{paddingBottom: '3%', fontSize: 10}}>
                    {el.disc}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          if (fullpage) {
            return (
              <TouchableWithoutFeedback
                key={i}
                onPress={() => {
                  //console.log(el);
                  handleData && handleData(data, el);
                }}>
                <View
                  key={i}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2%',
                    //paddingLeft: '5%',
                  }}>
                  <View
                    style={{
                      width: 60,
                      margin: '1%',
                      height: 60,
                      borderRadius: 100,
                      backgroundColor: '#F9F9F9',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '5%',
                    }}>
                    <Image source={el.src} />
                    {el.isSelected && (
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          zIndex: 1,
                          position: 'absolute',
                          borderRadius: 100,
                          backgroundColor: 'rgba(255,255,2555,0.6)',
                        }}></View>
                    )}
                  </View>
                  <Text style={{paddingBottom: '3%', fontSize: 10}}>
                    {el.disc}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }
        })}
      </View>
      {!fullpage && (
        <TouchableWithoutFeedback
          onPress={() => {
            setState(!showMore);
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              flex: 1,
            }}>
            {showMore && (
              <Image
                style={{margin: '1%'}}
                source={require('../../assets/images/main/close.png')}
              />
            )}
            <Text>{!showMore ? '더보기' : '접어두기'}</Text>
            {!showMore && (
              <Image
                style={{margin: '1%'}}
                source={require('../../assets/images/main/list-open.png')}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    gap: 5,
  },
});
