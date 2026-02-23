import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import Main from '../pages/main/customer/Main';
import FindService from '../pages/pick/FindService';
import CustomHeader from './header/CustomHeader';
import PickService from '../pages/pick/PickService';
import * as ReactNativeStack from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import PickServiceDetail from '../pages/pick/PickServiceDetail';
import SchedulePage from '../pages/schedule/customer/SchedulePage';
import PopUp from '../pages/popup/PopUp';
import {createStackNavigator} from '@react-navigation/stack';

import ChatList from '../pages/talk/customer/ChatList';

import HomeStack from './stack/customer/HomeStack';
import ScheduleStack from './stack/customer/ScheduleStack';
import UserStack from './stack/customer/UserStack';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  NavigatoarTab: {};
  HomeStack: {};
  UserStack: {};
  Login: {userId: string};
  LoginUserType: {userType: string};
  SignUp: {userType: string};
  SignUpEnterprise: {userType: string};
  SignUpEnterIntro: {userType: string};
  PartnerApplication: {userType: string};
  PartnerApplication2: {userType: string};
  PartnerApplication3: {userType: string};
  SubscriptionCost: {userType: string};
  Agreement: {userType: string};
  SignUpReview: {userType: string};
  SignUpReviewRefused: {userType: string};
  ConfirmSignUp: {userType: string};
  FindAccount: {userType: string};
  Main: {userType: string};
  Alarm: {};
  FindService: {};
  ServiceIntro: {};
  PickService: {};
  PickServiceDetail: {};
  SetServiceTime: {};
};
const Stack = ReactNativeStack.createNativeStackNavigator<RootStackParamList>();

export default function NavigatorTab() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2CB07B',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarBadgeStyle: {
          maxWidth: 10,
          maxHeight: 10,
          fontSize: 10,
          lineHeight: 4,
        },
        tabBarItemStyle: {},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabel: '홈',
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/tab1s.png')
                  : require('../assets/images/tab1.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="시공PICK"
        component={PickServiceDetail}
        initialParams={{popupOpen: false, headerValue: '종합인테리어'}}
        options={{
          headerShown: true,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/tab2s.png')
                  : require('../assets/images/tab2.png')
              }
            />
          ),
          header: (el: any) => (
            <CustomHeader
              title={
                <TouchableWithoutFeedback
                  onPress={() => {
                    el.navigation.setParams({popupOpen: true});
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Text
                      style={{
                        paddingRight: '2%',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(2),
                      }}>
                      {el.route.params.headerValue}
                    </Text>
                    <Image source={require('../assets/images/open0.5.png')} />
                  </View>
                </TouchableWithoutFeedback>
              }
              isLogin={true}
            />
          ),
          tabBarStyle: {display: 'none'},
          tabBarBadge: ' ',
        }}
      />

      <Tab.Screen
        name="스케줄"
        component={ScheduleStack}
        options={{
          tabBarLabel: '스케줄',
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/tab3s.png')
                  : require('../assets/images/tab3.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="TALK"
        component={ChatList}
        options={{
          tabBarLabel: 'TALK',
          headerShown: true,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/tab4s.png')
                  : require('../assets/images/tab4.png')
              }
            />
          ),
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>전체</Text>
                  <Image source={require('../assets/images/open0.5.png')} />
                </View>
              }
              isLogin={true}
            />
          ),
        }}
      />

      <Tab.Screen
        name="마이페이지"
        component={UserStack}
        options={{
          headerShown: false,
          tabBarLabel: '마이페이지',
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/tab5s.png')
                  : require('../assets/images/tab5.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
