/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from '@/pages/login/Login';
import LoginUserType from '@/pages/login/LoginUserType';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import * as ReactNativeStack from '@react-navigation/native-stack';
import SignUp from '@/pages/signup/customer/SignUp';
import {RootStackParamList} from '@/utils/StackParamList';
import CustomHeader from '@/components/header/CustomHeader';

import Main from '@/pages/main/customer/Main';
import NavigatorTab from '@/components/NavigatorTab';
import Alarm from '@/pages/main/Alarm';
import FindService from '@/pages/pick/FindService';
import ServiceIntro from '@/pages/pick/ServiceInto';
import PickService from '@/pages/pick/PickService';
import PickServiceDetail from '@/pages/pick/PickServiceDetail';
import SetServiceTime from '@/pages/pick/SetServiceTime';
import ChatRoom from '@/pages/talk/customer/ChatRoom';
import ChatHeader from '@/components/header/ChatHeader';

import LoginSignupStack from '@/components/stack/customer/LoginSignupStack';
import ConstructionCoNavigatorTab from '@/components/ConstructionCoNavigatorTab';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import ConstructionChatRoom from '@/pages/talk/constructionco/ConstructionChatRoom';
import ConsPayAdvertisement from '@/pages/user/constructionco/payadvertisement/ConsPayAdvertisement';
import ConsPayAdvertisement2 from '@/pages/user/constructionco/payadvertisement/ConsPayAdvertisement2';
import ConsPayAdvertisement3 from '@/pages/user/constructionco/payadvertisement/ConsPayAdvertisement3';
import ConsUpdateCoInfo from '@/pages/user/constructionco/updatecoinfo/ConsUpdateCoInfo';
import ConsUpdateCoInfo2 from '@/pages/user/constructionco/updatecoinfo/ConsUpdateCoInfo2';
import HeavyCoNavigatorTab from '@/components/HeavyCoNavigatorTab';

// import PartnerApplication from '@/pages/signup/SignUpEnterprise';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const theme = StyleSheet.create({
  rootWrapper: {},
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  type RootStackParamList = {
    NavigatoarTab: {};
    ConstructionCoNavigatorTab: {};
    HeavyCoNavigatorTab: {};
    StoreNavigatoarTab: {};
    Home: {};
    LoginStack: {userId: string};
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
    ChatRoom: {};
    ConstructionChatRoom: {};
    ConsPayAdvertisement: {};
    ConsPayAdvertisement2: {};
    ConsPayAdvertisement3: {};
    ConsUpdateCoInfo: {};
    ConsUpdateCoInfo2: {};
  };

  const Stack =
    ReactNativeStack.createNativeStackNavigator<RootStackParamList>();
  const BackImage = () => (
    <Image source={require('@/assets/images/chevron.png')} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginStack"
          options={{
            title: '',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerShown: false,
          }}
          component={LoginSignupStack}
        />
        <Stack.Screen
          name="ConstructionCoNavigatorTab"
          options={{
            title: '',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
          component={ConstructionCoNavigatorTab}
        />

        <Stack.Screen
          name="NavigatoarTab"
          options={{
            title: '',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
          component={NavigatorTab}
        />
        <Stack.Screen
          name="HeavyCoNavigatorTab"
          options={{
            title: '',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
          component={HeavyCoNavigatorTab}
        />

        <Stack.Screen
          name="ServiceIntro"
          options={{
            title: '',
            header: () => (
              <CustomHeader
                title={
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '700',
                      }}>
                      종합인테리어
                    </Text>
                    <Image source={require('@/assets/images/open0.5.png')} />
                  </View>
                }
                isLogin={true}
              />
            ),
          }}
          component={ServiceIntro}
        />
        <Stack.Screen
          name="PickService"
          options={{
            title: '',
          }}
          component={PickService}
        />
        <Stack.Screen
          name="PickServiceDetail"
          options={{
            title: '',
            header: el => (
              <CustomHeader
                title={
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text></Text>
                    <Image source={require('@/assets/images/open0.5.png')} />
                  </View>
                }
                isLogin={true}
              />
            ),
          }}
          component={PickServiceDetail}
        />
        <Stack.Screen
          name="SetServiceTime"
          initialParams={{popupOpen: false, headerValue: ''}}
          options={{
            header: (el: any) => (
              <CustomHeader
                title={
                  <TouchableWithoutFeedback
                    onPress={() => {
                      el.navigation.setParams({popupOpen: true});
                      //   console.log(el.route);
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
                        {el.route.params?.headerValue}
                      </Text>
                      <Image source={require('@/assets/images/open0.5.png')} />
                    </View>
                  </TouchableWithoutFeedback>
                }
                isLogin={true}
              />
            ),
          }}
          component={SetServiceTime}
        />
        <Stack.Screen
          name="Main"
          options={{
            title: '',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
          component={Main}
        />
        <Stack.Screen
          name="Alarm"
          options={{
            title: '',
            header: () => <CustomHeader title={'알림'} isLogin={true} />,
          }}
          component={Alarm}
        />

        {/* 시공업체 광고결재 */}
        <Stack.Screen
          name="ConsPayAdvertisement"
          options={{
            title: '광고결재',
            header: () => <CustomHeader title={'광고결재'} />,
          }}
          component={ConsPayAdvertisement}
        />
        <Stack.Screen
          name="ConsPayAdvertisement2"
          options={{
            title: '광고결재',
            header: () => <CustomHeader title={'광고결재'} />,
          }}
          component={ConsPayAdvertisement2}
        />
        <Stack.Screen
          name="ConsPayAdvertisement3"
          options={{
            title: '광고결재',
            header: () => <CustomHeader title={'검토중'} />,
          }}
          component={ConsPayAdvertisement3}
        />

        {/* 시공업체 정보 수정요청 */}
        <Stack.Screen
          name="ConsUpdateCoInfo"
          options={{
            title: '업체정보수정요청',
            header: () => <CustomHeader title={'업체정보수정요청'} />,
          }}
          component={ConsUpdateCoInfo}
        />
        <Stack.Screen
          name="ConsUpdateCoInfo2"
          options={{
            title: '업체정보수정요청',
            header: () => <CustomHeader title={'업체정보수정요청'} />,
          }}
          component={ConsUpdateCoInfo2}
        />

        {/* 중장비업체 파트너신청서 */}
        {/* <Stack.Screen
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
        */}
        <Stack.Screen
          name="ChatRoom"
          options={{
            title: '채팅룸',
          }}
          component={ChatRoom}
        />
        <Stack.Screen
          name="ConstructionChatRoom"
          options={{
            title: '채팅룸',
          }}
          component={ConstructionChatRoom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  background: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
