import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styled, {css} from 'styled-components/native';

import {
  RouteProp,
  StackNavigationState,
  TypedNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '@/utils/StackParamList';
import Toggle from '@/components/toggle/CustomToggle';
import MainMenu, {MenuItemPorp, MenuListProp} from '@/components/main/MainMenu';
import CalendarPopup from '../popup/CalendarPopup';
import AddressSelectPopup from '../popup/AddressSelectPopup';
interface LoginProp {
  navigate: any;
}
const data: MenuItemPorp[] = [
  {
    src: require('@/assets/images/main/home/19514.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/19518.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/19519.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20485.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20486.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20487.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20488.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20489.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20490.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20491.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20492.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20493.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20494.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20495.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20497.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20498.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20499.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20500.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20501.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20502.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20503.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/home/20504.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
];
const storeData = [
  {
    src: require('@/assets/images/main/store/19436.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20485.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20486.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20487.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20488.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20489.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20490.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20491.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20492.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20493.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20494.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20495.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20496.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20497.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20498.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20499.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20500.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20501.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20502.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20503.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20504.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20505.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20506.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/20507.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/1222.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/1223.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/1279.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/1406.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
  {
    src: require('@/assets/images/main/store/1407.png'),
    disc: '3D도면설계',
    isSelected: true,
  },
];
const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Indicator = styled.View<{focused: boolean}>`
  margin: 0px 4px;
  background-color: ${props => (props.focused ? '#B4B4B4' : '#B4B4B4')};
  width: ${props => (props.focused ? '20px' : '6px')};
  height: 6px;
  border-radius: 3px;
`;
const dum = false;
interface PickServiceProps {
  isPopupOpen?: boolean;
  handlePopup?: () => void;
  navigation: any;
}
export default function PickService(pickProps: PickServiceProps): JSX.Element {
  const {isPopupOpen, handlePopup, navigation} = pickProps;
  // const navigation = useNavigation<any>();
  const [isOn, setToggle] = useState(true);
  const [page, setPage] = useState(0);
  const [icon, setState] = useState<MenuItemPorp[]>([...data]);
  const [nextPage, navigateToNextPage] = useState(true);
  const handleData = (v: MenuItemPorp[], selectedItem: MenuItemPorp) => {
    const newData = [];
    //console.log(selectedItem);
    const d = v.map((e: MenuItemPorp) => {
      if (e.src === selectedItem.src) {
        return {...e, isSelected: !selectedItem.isSelected};
      }
      return {...e};
    });
    //console.log(d);
    setState(d);
  };
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);

  return (
    <View
      style={
        isPopupOpen
          ? {
              flex: 1,
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: 1,
            }
          : {
              display: 'none',
            }
      }>
      <View style={styles.locationWrapper}>
        <View></View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('@/assets/images/pin0.5.png')} />
          <Text style={{paddingLeft: '5%', paddingRight: '5%'}}>
            서울특별시 마포구 도화동 11-1
          </Text>
          <Image source={require('@/assets/images/open0.5.png')} />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Alarm')}>
          <View
            style={{right: '7.5%', position: 'absolute', marginBottom: '5%'}}>
            <Image source={require('@/assets/images/alarm0.5.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.rootWrapper}>
          <View></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '7.5%',
              paddingRight: '7.5%',
              paddingTop: '2%',
              paddingBottom: '2%',
            }}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
              필요한 시공을 선택하세요
            </Text>
            <Toggle isOn={!isOn} onToggle={() => setToggle(!isOn)} />
          </View>
          <View>
            <MainMenu
              data={isOn ? icon : storeData}
              fullpage={true}
              handleData={handleData}
            />
          </View>
        </View>
      </ScrollView>
      {/* <CalendarPopup /> */}
      <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
        <View
          style={{
            width: '40%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#416292',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            주의사항 안내문
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            //navigation.navigate('PickServiceDetail')
            // navigation.setOptions({tabbarStyle: {display: 'flex'}})
            handlePopup && handlePopup()
          }>
          <View
            style={{
              width: '60%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'white',
              borderTopColor: '#F6F6F6',
              borderTopWidth: 1,
            }}>
            <Text
              style={{fontWeight: '600', color: '#2CB07B', paddingRight: '5%'}}>
              다음
            </Text>
            <Image source={require('@/assets/images/next.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* <AddressSelectPopup /> */}
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
  locationWrapper: {
    height: '10%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: '5%',
    backgroundColor: 'white',
  },
});
