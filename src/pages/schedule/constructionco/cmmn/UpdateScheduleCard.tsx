import ScheduleNavPopup from '@/components/popup/ScheduleNavPopup';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
interface VisitCardProps {
  customerName: string;
  customerAddress: string;
  visitTime: string;
  companySchedule: string;
}

export default function UpdateScheduleCard(data: VisitCardProps): JSX.Element {
  const {customerName, customerAddress, visitTime, companySchedule} = data;
  // Card내 표시된 고객 취소요청상태관리
  // isCancled : true (공사취소요청 수락,거절 버튼활성), false (고객님 확인중 상태활성)
  const [isCancled, setState] = useState(false);
  const router = useRoute<any>();
  const navigation = useNavigation<any>();
  const handlePopup = () => {
    navigation.setParams({...router.params, popupOpen: false});
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <View style={styles.customerInfoContainer}>
          <View style={styles.imageBox}>
            <Image source={require('@/assets/images/cancel-talk.png')} />
          </View>
          <View style={styles.infoBox}>
            <View style={styles.nameAndCopy}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',
                }}>
                성시경 고객님
              </Text>
              <Image
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'contain',
                }}
                source={require('@/assets/images/visit/copy.jpg')}></Image>
            </View>
            <Text
              style={{
                width: '90%',
                fontSize: responsiveFontSize(1.5),
                color: '#656565',
              }}>
              서울특별시 마포구 마포대로 20 202호
            </Text>
          </View>
        </View>
        <View style={styles.visitTimeBox}>
          <View style={styles.visitInfo}>
            <View
              style={{
                position: 'absolute',
                width: WINDOW_WIDTH * 0.6,
                height: '100%',
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.8)',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: responsiveFontSize(2),
                }}>
                고객님에게 임대취소요청을
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: responsiveFontSize(2),
                }}>
                하였습니다
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text style={{fontSize: responsiveFontSize(2)}}>공사 시작일</Text>
              <Text
                style={{fontSize: responsiveFontSize(2), fontWeight: '700'}}>
                2023년 05월 15일
              </Text>
              <Text
                style={{fontSize: responsiveFontSize(2), fontWeight: '700'}}>
                AM 07:00
              </Text>
            </View>
          </View>
        </View>
        {!isCancled && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: WINDOW_HEIGHT * 0.1,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setState(!isCancled);
              }}>
              <Text
                style={{
                  color: '#2CB07B',
                  fontWeight: '700',
                  fontSize: responsiveFontSize(2),
                }}>
                고객님 확인중
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
        {isCancled && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: WINDOW_HEIGHT * 0.1,
              borderBottomColor: '#e9edef',
              borderBottomWidth: 1,
            }}>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  color: '#F2295F',
                  fontWeight: '700',
                  paddingRight: '10%',
                  fontSize: responsiveFontSize(2),
                }}>
                취소
              </Text>
            </TouchableWithoutFeedback>
            <Image source={require('@/assets/images/vertical-bar.png')} />
            <TouchableWithoutFeedback>
              <Text
                style={{
                  paddingLeft: '10%',
                  color: '#2CB07B',
                  fontWeight: '700',
                  fontSize: responsiveFontSize(2),
                }}>
                수락
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
      {router.params.popupOpen && (
        <ScheduleNavPopup handlePopup={handlePopup} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width * 0.75,
    // height: WINDOW_HEIGHT * 0.4,
    borderRadius: 10,
    shadowColor: '#ababab',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e9edef',
  },
  cardWrapper: {
    width: '100%',
    alignItems: 'center',
    // height: '100%',
    paddingTop: WINDOW_HEIGHT * 0.04,
  },
  customerInfoContainer: {
    width: WINDOW_WIDTH * 0.68,
    gap: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  imageBox: {
    // width: 90,
    // height: '100%',
  },
  infoBox: {
    width: 'auto',
    justifyContent: 'center',
    paddingTop: '3%',
  },
  nameAndCopy: {
    width: '100%',
    // height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  visitTimeBox: {
    width: WINDOW_WIDTH * 0.6,
    height: WINDOW_HEIGHT * 0.27,
    backgroundColor: '#f9f9f9',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  visitInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  modifyVisitTime: {
    width: '25%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modifyButton: {
    width: '85%',
    height: '90%',
    backgroundColor: '#e9edef',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
