import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import Main from '@/pages/main/customer/Main';
import FindService from '@/pages/pick/FindService';
import CustomHeader from '@/components/header/CustomHeader';
import * as ReactNativeStack from '@react-navigation/native-stack';
import SchedulePage from '@/pages/schedule/customer/SchedulePage';
import ScheduleVisitFix from '@/pages/schedule/customer/ScheduleVisitFix';
import ConstructionSchedule from '@/pages/schedule/customer/ConstructionSchedule';
import ConstructionScheduleUpdate from '@/pages/schedule/customer/ConstructionScheduleUpdate';
import ReviewWrite from '@/pages/schedule/customer/ReviewWrite';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Tab = createBottomTabNavigator();

type ShecduleStackParamList = {
  NavigatoarTab: {};
  PreperVisit: {};
  FixedVisit: {};
  ConstructionSchedule: {};
  ConstructionScheduleUpdate: {};
  Review: {};
};
const Stack =
  ReactNativeStack.createNativeStackNavigator<ShecduleStackParamList>();

const ScheduleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreperVisit"
        initialParams={{popupOpen: false}}
        options={{
          title: '',
          header: el => (
            <CustomHeader
              title={
                <TouchableWithoutFeedback
                  onPress={() => {
                    console.log('preper');
                    el.navigation.setParams({popupOpen: true});
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        paddingRight: '5%',
                        fontSize: responsiveFontSize(2),
                        fontWeight: '700',
                      }}>
                      희망방문요청
                    </Text>
                    <Image source={require('@/assets/images/open0.5.png')} />
                  </View>
                </TouchableWithoutFeedback>
              }
              isLogin={true}
            />
          ),
        }}
        component={SchedulePage}
      />
      <Stack.Screen
        name="ConstructionSchedule"
        initialParams={{popupOpen: false}}
        options={{
          title: '',
          header: el => (
            <CustomHeader
              title={
                <TouchableWithoutFeedback
                  onPress={() => {
                    console.log('cons');
                    el.navigation.setParams({popupOpen: true});
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{paddingRight: '5%'}}>공사스케줄</Text>
                    <Image source={require('@/assets/images/open0.5.png')} />
                  </View>
                </TouchableWithoutFeedback>
              }
              isLogin={true}
            />
          ),
        }}
        component={ConstructionSchedule}
      />
      <Stack.Screen
        name="Review"
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
        name="ConstructionScheduleUpdate"
        initialParams={{popupOpen: false}}
        options={{
          title: '',
          header: el => (
            <CustomHeader
              title={
                <TouchableWithoutFeedback
                  onPress={() => {
                    console.log('up');
                    el.navigation.setParams({popupOpen: true});
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{paddingRight: '5%', fontWeight: '700'}}>
                      공사취소 및 시간변경 요청
                    </Text>
                    <Image source={require('@/assets/images/open0.5.png')} />
                  </View>
                </TouchableWithoutFeedback>
              }
              isLogin={true}
            />
          ),
        }}
        component={ConstructionScheduleUpdate}
      />
      <Stack.Screen
        name="FixedVisit"
        initialParams={{popupOpen: false}}
        options={{
          title: '',
          header: el => (
            <CustomHeader
              title={
                <TouchableWithoutFeedback
                  onPress={() => {
                    console.log('fix');
                    el.navigation.setParams({popupOpen: true});
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{paddingRight: '5%'}}>방문확정</Text>
                    <Image source={require('@/assets/images/open0.5.png')} />
                  </View>
                </TouchableWithoutFeedback>
              }
              isLogin={true}
            />
          ),
        }}
        component={ScheduleVisitFix}
      />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
