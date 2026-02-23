import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import Main from '@/pages/main/customer/Main';
import FindService from '@/pages/pick/FindService';
import CustomHeader from '@/components/header/CustomHeader';
import * as ReactNativeStack from '@react-navigation/native-stack';
import MyPage from '@/pages/user/customer/MyPage';
import Notice from '@/pages/user/customer/Notice';
import PickPage from '@/pages/user/customer/PickPage';
import ReviewMgmt from '@/pages/user/customer/ReviewMgmt';
import FrequentQnA from '@/pages/user/customer/FrequentQnA';
import QnAEnrollPage from '@/pages/user/customer/QnAEnrollPage';
import ProfileUpdate from '@/pages/user/customer/ProfileUpdate';
import ProfileUpdateForm from '@/pages/user/customer/ProfileUpdateForm';
import ReviewWrite from '@/pages/schedule/customer/ReviewWrite';

const Tab = createBottomTabNavigator();

type UserStackParamList = {
  Mypage: {};
  Notice: {};
  PickPage: {};
  ReviewMgmt: {};
  FrequentQnA: {};
  QnAEnrollPage: {};
  ProfileUpdate: {};
  ProfileUpdateForm: {};
  ReviewWrite: {};
};
const Stack = ReactNativeStack.createNativeStackNavigator<UserStackParamList>();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mypage"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
        component={MyPage}
      />
      <Stack.Screen
        name="Notice"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
        component={Notice}
      />
      <Stack.Screen
        name="ProfileUpdateForm"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: true,
          header: () => (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              <CustomHeader
                title={
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: '700', fontSize: 16}}>
                      회원정보수정하기
                    </Text>
                  </View>
                }
                isLogin={false}
              />
            </View>
          ),
        }}
        component={ProfileUpdateForm}
      />
      <Stack.Screen
        name="ProfileUpdate"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: true,
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>
                    회원정보수정하기
                  </Text>
                </View>
              }
              isLogin={false}
            />
          ),
        }}
        component={ProfileUpdate}
      />
      <Stack.Screen
        name="QnAEnrollPage"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: true,
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>
                    1:1문의하기
                  </Text>
                </View>
              }
              isLogin={false}
            />
          ),
        }}
        component={QnAEnrollPage}
      />
      <Stack.Screen
        name="ReviewWrite"
        options={{
          title: '',
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{paddingRight: '5%', fontWeight: '700'}}>
                    리뷰
                  </Text>
                  <Image source={require('@/assets/images/open0.5.png')} />
                </View>
              }
              isLogin={true}
            />
          ),
        }}
        component={ReviewWrite}
      />

      <Stack.Screen
        name="FrequentQnA"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: true,
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontWeight: '700'}}>자주묻는질문</Text>
                </View>
              }
              isLogin={false}
            />
          ),
        }}
        component={FrequentQnA}
      />
      <Stack.Screen
        name="ReviewMgmt"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: true,
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{paddingRight: '5%', fontWeight: '700'}}>
                    전체
                  </Text>
                  <Image source={require('@/assets/images/open0.5.png')} />
                </View>
              }
              isLogin={false}
            />
          ),
        }}
        component={ReviewMgmt}
      />
      <Stack.Screen
        name="PickPage"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: true,
          header: () => (
            <CustomHeader
              title={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{paddingRight: '5%', fontWeight: '700'}}>
                    전체
                  </Text>
                  <Image source={require('@/assets/images/open0.5.png')} />
                </View>
              }
              isLogin={false}
            />
          ),
        }}
        component={PickPage}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
