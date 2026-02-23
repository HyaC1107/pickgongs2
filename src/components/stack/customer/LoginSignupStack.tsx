import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import Main from '@/pages/main/customer/Main';
import FindService from '@/pages/pick/FindService';

import CustomHeader from '@/components/header/CustomHeader';
import * as ReactNativeStack from '@react-navigation/native-stack';
import Login from '@/pages/login/Login';
import LoginUserType from '@/pages/login/LoginUserType';
import FindAccount from '@/pages/login/FindAccount';
import SignUp from '@/pages/signup/customer/SignUp';
import SignUpEnterIntro from '@/pages/signup/cmmn/SignUpEnterIntro';

import PartnerApplication from '@/pages/signup/constructionco/PartnerApplication';
import PartnerApplication3 from '@/pages/signup/constructionco/PartnerApplication3';
import Agreement from '@/pages/signup/cmmn/Agreement';
import SignUpReview from '@/pages/signup/cmmn/SignUpReview';
import SignUpReviewRefused from '@/pages/signup/cmmn/SignUpReviewRefused';
import PartnerApplication2 from '@/pages/signup/constructionco/PartnerApplication2';
import SignUpEnterprise from '@/pages/signup/constructionco/SignUpEnterprise';
import ConfirmSignUp from '@/pages/signup/cmmn/ConfirmSignUp';
import HeavyPartnerApplication from '@/pages/signup/heavyequipmentco/HeavyPartnerApplication';
import HeavyPartnerApplication2 from '@/pages/signup/heavyequipmentco/HeavyPartnerApplication2';
import HeavyPartnerApplication3 from '@/pages/signup/heavyequipmentco/HeavyPartnerApplication3';
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
  HeavyPartnerApplication: {};
  HeavyPartnerApplication2: {};
  HeavyPartnerApplication3: {};
};
const Stack = ReactNativeStack.createNativeStackNavigator<RootStackParamList>();

const LoginSignupStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
        component={Login}
      />

      <Stack.Screen
        name="LoginUserType"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
        }}
        component={LoginUserType}
      />

      <Stack.Screen
        name="FindAccount"
        options={{
          title: '',
          header: () => <CustomHeader title={'아이디 / 비밀번호 찾기'} />,
        }}
        component={FindAccount}
      />
      {/* 소비자 회원가입 */}
      <Stack.Screen
        name="SignUp"
        options={{
          title: '회원가입',
          header: () => <CustomHeader title={'회원가입'} />,
        }}
        component={SignUp}
      />
      {/* 시공업체/중장비업체 회원가입 */}
      <Stack.Screen
        name="SignUpEnterprise"
        options={{
          title: '회원가입',
          header: () => <CustomHeader title={'회원가입'} />,
        }}
        component={SignUpEnterprise}
      />

      <Stack.Screen
        name="SignUpEnterIntro"
        options={{
          title: '회원가입',
          header: () => <CustomHeader title={'회원가입'} />,
        }}
        component={SignUpEnterIntro}
      />
      {/* 시공업체 파트너신청서 */}
      <Stack.Screen
        name="PartnerApplication"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={PartnerApplication}
      />
      <Stack.Screen
        name="PartnerApplication2"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={PartnerApplication2}
      />
      <Stack.Screen
        name="PartnerApplication3"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={PartnerApplication3}
      />
      {/* 중장비업체 파트너신청서 */}
      <Stack.Screen
        name="HeavyPartnerApplication"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={HeavyPartnerApplication}
      />
      <Stack.Screen
        name="HeavyPartnerApplication2"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={HeavyPartnerApplication2}
      />
      <Stack.Screen
        name="HeavyPartnerApplication3"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={HeavyPartnerApplication3}
      />

      <Stack.Screen
        name="Agreement"
        options={{
          title: '파트너 신청서',
          header: () => <CustomHeader title={'파트너 신청서'} />,
        }}
        component={Agreement}
      />

      <Stack.Screen
        name="SignUpReview"
        options={{
          title: '검토중',
          header: () => <CustomHeader title={'검토중'} />,
        }}
        component={SignUpReview}
      />
      <Stack.Screen
        name="SignUpReviewRefused"
        options={{
          title: '검토중',
          header: () => <CustomHeader title={'검토중'} />,
        }}
        component={SignUpReviewRefused}
      />
      <Stack.Screen
        name="ConfirmSignUp"
        options={{
          title: '회원가입완료',
          header: () => (
            <CustomHeader
              title={<Image source={require('@/assets/images/loc-icon.png')} />}
            />
          ),
        }}
        component={ConfirmSignUp}
      />
    </Stack.Navigator>
  );
};

export default LoginSignupStack;
