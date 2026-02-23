import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
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
import HomeStack from './stack/customer/HomeStack';
import ScheduleStack from './stack/customer/ScheduleStack';
import VisitRequestPage from '@/pages/schedule/heavyequipmentco/VisitRequestPage';
import StoreMain from '@/pages/main/constructionco/ConstructionCoMain';
import ConstructionCoMain from '@/pages/main/constructionco/ConstructionCoMain';
import ConCoScheduleStack from './stack/constructionco/ConCoScheduleStack';
import ToolRentReqStack from './stack/constructionco/ToolRentReqStack';
import UserStack from './stack/customer/UserStack';
import ChatList from '@/pages/talk/customer/ChatList';
import HeavyCoMain from '@/pages/main/heavyco/HeavyCoMain';
import HeavyToolRentReqStack from './stack/heavyco/HeavyToolRentReqStack';
import ConstructionChatList from '@/pages/talk/constructionco/ConstructionChatList';
import ConsUserStack from './stack/constructionco/ConsUserStack';

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  NavigatoarTab: {};
  Home: {param: string};
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

export default function HeavyCoNavigatorTab() {
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
        name="홈"
        component={HeavyCoMain}
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
        name="고객관리스케줄"
        component={ConCoScheduleStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/navicon-store-h-2.png')
                  : require('@/assets/images/navicon-store-2.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="중장비스케줄"
        component={HeavyToolRentReqStack}
        options={{
          tabBarLabel: '중장비스케줄',
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/navicon-store-h-3.png')
                  : require('../assets/images/navicon-store-3.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="TALK"
        component={ConstructionChatList}
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
        component={ConsUserStack}
        options={{
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
