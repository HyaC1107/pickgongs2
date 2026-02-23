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
import ConsMypage from '@/pages/user/constructionco/ConsMyPage';
import ConsNotice from '@/pages/user/constructionco/ConsNotice';
import ConsProfileUpdateForm from '@/pages/user/constructionco/ConsProfileUpdateForm';
import ConsProfileUpdate from '@/pages/user/constructionco/ConsProfileUpdate';
import ConsQnAEnrollPage from '@/pages/user/constructionco/QnAEnrollPage';
import ConsReviewMgmt from '@/pages/user/constructionco/ConsReviewMgmt';
import ConsDecoServiceInfo from '@/pages/user/constructionco/ConsDecoServiceInfo';

const Tab = createBottomTabNavigator();

type UserStackParamList = {
  ConsMypage: {}; // 마이페이지
  ConsNotice: {}; // 공지사항
  ConsReviewMgmt: {}; // 리뷰관리
  ConsDecoServiceInfo: {}; // 우리가게꾸미기
  ConsPayAdvertisement: {}; // 광고결재
  ConsUpdateCoInfo: {}; // 업체정보 수정요청
  ConsFrequentQnA: {}; // 자주묻는질문
  ConsQnAEnrollPage: {}; // 1:1 문의하기/소비자 신고
  ConsInquiry: {}; //불편사항 및 개선 문의
  ConsProfileUpdateForm: {}; //회원정보수정
  ConsProfileUpdate: {}; //회원정보수정
};
const Stack = ReactNativeStack.createNativeStackNavigator<UserStackParamList>();

const ConsUserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConsMypage"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
        component={ConsMypage}
      />
      <Stack.Screen
        name="ConsNotice"
        options={{
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
        component={ConsNotice}
      />
      <Stack.Screen
        name="ConsProfileUpdateForm"
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
        component={ConsProfileUpdateForm}
      />
      <Stack.Screen
        name="ConsProfileUpdate"
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
        component={ConsProfileUpdate}
      />
      <Stack.Screen
        name="ConsQnAEnrollPage"
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
        component={ConsQnAEnrollPage}
      />
      <Stack.Screen
        name="ConsReviewMgmt"
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
        component={ConsReviewMgmt}
      />

      <Stack.Screen
        name="ConsFrequentQnA"
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
      {/* <Stack.Screen
        name="ConsProfileUpdate"
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
      /> */}
      <Stack.Screen
        name="ConsDecoServiceInfo"
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
                    우리가게꾸미기
                  </Text>
                </View>
              }
              isLogin={false}
            />
          ),
        }}
        component={ConsDecoServiceInfo}
      />
    </Stack.Navigator>
  );
};

export default ConsUserStack;
