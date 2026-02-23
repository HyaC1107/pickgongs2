import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PopUp from '../../popup/PopUp';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@/utils/StackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import Location from '@/components/signup/Location';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function HeavyPartnerApplication3(): JSX.Element {
  const navigation = useNavigation<any>();
  const router = useRoute<RouteProp<RootStackParamList>>();
  useEffect(() => {
    console.log(router);
  }, []);
  return (
    <SafeAreaView style={styles.rootWrapper}>
      <ScrollView style={styles.rootWrapper}>
        <View style={styles.welcomeTitleWrap}>
          <Text style={styles.greeting}>노출하고 싶은 지역을</Text>
          <Text style={styles.greeting}>선택해 주세요!</Text>
        </View>
        <View style={[styles.greyBodyWrap, styles.marginBottom]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingTop: '2%',
            }}>
            <Text>기본 노출지역</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 30, color: '#999999', paddingRight: '2%'}}>
                +
              </Text>
              <Text style={{color: '#2CB07B'}}>지역추가</Text>
            </View>
          </View>
          <View style={styles.showingLocationExWrap}>
            <Text style={{paddingBottom: '2%'}}>예시</Text>
            <Location />
            <Location />
            <Location />
            <Location />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '2%',
            }}>
            <Text style={[styles.uploadMent2]}>
              시 : 1군데 / 구 : 1군데 / 군 : 2군데로
            </Text>
            <Text style={[styles.uploadMent2, styles.marginBottom]}>
              지역노출 가능해요!
            </Text>
          </View>
        </View>
        <View style={[styles.greyBodyWrap, styles.marginBottom]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingTop: '2%',
            }}>
            <Text>추가 노출지역</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 30, color: '#999999', paddingRight: '2%'}}>
                +
              </Text>
              <Text style={{color: '#2CB07B'}}>지역추가</Text>
            </View>
          </View>
          <View style={styles.showingLocationExWrap}>
            <Text style={{paddingBottom: '2%'}}>예시</Text>
            <View
              style={{
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#ff0',
              }}>
              <Location />
              <Location />
              <Location />
              {/* <Location />
              <Location />
              <Location />
              <Location />
              <Location />
              <Location />
              <Location /> */}
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '2%',
            }}>
            <Text style={[styles.uploadMent2, {paddingBottom: '2%'}]}>
              합이 3을 넘지 않는 선에서 추가 할 수 있어요!
            </Text>

            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: WINDOW_WIDTH * 0.8,
                // height: WINDOW_HEIGHT * 0.1,
                borderRadius: 5,
                alignItems: 'center',
                padding: '2%',
                marginBottom: '5%',
                gap: 10,
              }}>
              <Text style={{fontSize: responsiveFontSize(1.4)}}>
                단위 [ 시 = 1 / 구 = 0.5 ]
              </Text>
              <View style={{alignItems: 'center', gap: 2}}>
                <Text style={{fontSize: responsiveFontSize(1.4)}}>
                  기본노출지역이 시 1군데 + 구 2군데 가능 / 이상 불가능
                </Text>
                <Text style={{fontSize: responsiveFontSize(1.4)}}>
                  기본노출지역이 시 1군데 + 시 2군데 가능 / 이상 불가능
                </Text>
              </View>
              <Text style={{fontSize: responsiveFontSize(1.6)}}>
                시 = 60,000원 / 구 = 50,000원 / 군 : 30,000원 이예요!
              </Text>
              <Text style={{fontSize: responsiveFontSize(1.4)}}>
                기본노출지역이 시 1군데 + 시 2군데 가능 / 이상 불가능
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.greyBodyWrap, styles.marginBottom]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingTop: '5%',
            }}>
            <Text>결제 금액</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}></View>
          </View>
          <View style={styles.payAmountWrap}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: '#ff0',
                width: '100%',
                paddingTop: '5%',
                paddingBottom: '2%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  padding: '2%',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: '600'}}>기본금액</Text>
                <Text
                  style={{color: '#004BA7', fontSize: 16, fontWeight: '600'}}>
                  {(49000).toLocaleString()}원
                </Text>
              </View>
              <View>
                <Text>+</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  padding: '2%',
                  alignItems: 'center',
                }}>
                <View>
                  <Text>기본금액</Text>
                </View>
                <View>
                  <Text
                    style={{color: '#004BA7', fontSize: 16, fontWeight: '600'}}>
                    {(49000).toLocaleString()}원
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: '100%',
                borderColor: '#707070',
              }}></View>
            <View
              style={{width: '100%', alignItems: 'flex-end', paddingTop: '5%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: '2%',
                }}>
                <Text>기본료</Text>
                <Text
                  style={{
                    color: '#004BA7',
                    fontSize: 16,
                    fontWeight: '600',
                    width: 100,
                    textAlign: 'right',
                    alignItems: 'flex-end',
                  }}>
                  {(149000).toLocaleString()}원
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>부가세10% 별도</Text>
                <Text
                  style={{
                    color: '#004BA7',
                    fontSize: 16,
                    fontWeight: '600',
                    width: 100,
                    textAlign: 'right',
                    alignItems: 'flex-end',
                  }}>
                  {(14900).toLocaleString()}원
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: '10%',
                  paddingBottom: '10%',
                }}>
                <Text style={{fontWeight: '600'}}>총금액</Text>
                <Text
                  style={{
                    color: '#2CB07B',
                    fontSize: 16,
                    fontWeight: '600',
                    width: 100,
                    textAlign: 'right',
                    alignItems: 'flex-end',
                  }}>
                  {(163900).toLocaleString()}원
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '2%',
            }}>
            <Text style={[styles.payMent]}>
              첫달 49,000원 + 부가세 10% 으로 결제됩니다
            </Text>
            <Text style={[styles.payMent, styles.marginBottom]}>
              단 추가지역 비용은 다음달부터 결제 되오니 참고하시길 바랍니다
            </Text>
          </View>
        </View>

        <View style={[styles.greyBodyWrap, styles.marginBottom]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //alignItems: 'center',
              width: '100%',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingTop: '5%',
            }}>
            <Text>자동출금 은행 선택</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                //padding: '5%',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: '5%',
                  //backgroundColor: '#ff0',
                  width: '90%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{paddingRight: '5%'}}>은행</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderRadius: 1,
                      borderColor: '#E6E6E6',
                    }}>
                    <TextInput style={styles.selectWrap} />
                    <View style={styles.iconWrap}>
                      <Image
                        style={{width: 10, height: 10}}
                        source={require('@/assets/images/triangle0.5.png')}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{paddingRight: '5%'}}>예금주</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 1,
                        borderColor: '#E6E6E6',
                      }}>
                      <TextInput style={styles.selectWrap} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // padding: '5%',
                //justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                paddingBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //padding: '5%',
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  // backgroundColor: '#ff0',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={
                    {
                      //backgroundColor: '#f00'
                    }
                  }>
                  <Text style={{paddingRight: '5%'}}>계좌번호</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 1,
                    borderColor: '#E6E6E6',
                  }}>
                  <TextInput style={{width: 190, height: 20}} />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //padding: '5%',
                alignItems: 'center',
                width: '100%',
                paddingBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //padding: '5%',
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  // backgroundColor: '#ff0',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={
                    {
                      //backgroundColor: '#f00'
                    }
                  }>
                  <Text style={{paddingRight: '5%'}}>주민등록번호</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 1,
                    borderColor: '#E6E6E6',
                  }}>
                  <TextInput style={{width: 160, height: 20}} />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //padding: '5%',
                alignItems: 'center',
                width: '100%',
                paddingBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //padding: '5%',
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  // backgroundColor: '#ff0',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={
                    {
                      //backgroundColor: '#f00'
                    }
                  }>
                  <Text style={{paddingRight: '5%'}}>전화번호</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 1,
                    borderColor: '#E6E6E6',
                  }}>
                  <TextInput style={{width: 190, height: 20}} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonWrap}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Agreement', {
                userType: 'heavy',
              })
            }>
            <View style={styles.button}>
              <Text style={styles.btnText}>다음</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    // justifyContent: 'center',
    // alignItems: 'center',
    display: 'flex',
    backgroundColor: 'white',
    // flexDirection: 'column',
    width: '100%',
    flex: 1,

    paddingLeft: '6%',
    paddingRight: '6%',
  },
  welcomeTitleWrap: {
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '15%',
    flex: 1.5,
    marginTop: '5%',
    marginBottom: '10%',
  },
  greeting: {
    fontSize: 16,
    color: '#000',
  },
  purple: {color: '#4545FD'},
  greyBodyWrap: {
    width: '100%',
    alignItems: 'center',
    //    justifyContent: 'center',
    //minHeight: 200,
    flex: 1,
    height: '40%',
    backgroundColor: '#F8F8FA',
    //padding: '6%',
  },
  greyBodyWrap2: {
    width: '100%',
    alignItems: 'center',
    //    justifyContent: 'center',
    minHeight: 150,
    flex: 1,
    height: '40%',
    backgroundColor: '#F8F8FA',
    //padding: '6%',
  },
  greyBodyWrap3: {
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    minHeight: 300,
    paddingTop: '5%',
    // height: '30%',
    // flex: 6,
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#F8F8FA',
    //   paddingTop: '6%',
    // paddingBottom: '6%',
  },

  bodyMentWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: '#2CB07B',
    fontSize: 20,
    fontWeight: '700',
  },
  showingLocationExWrap: {
    alignItems: 'center',
    //backgroundColor: '#ff0',
    //width: '90%',
    maxHeight: 230,
    // paddingTop: '2%',
    //marginBottom: 10,
    justifyContent: 'center',
  },
  payAmountWrap: {
    alignItems: 'center',
    //backgroundColor: '#ff0',
    width: '70%',
    maxHeight: 230,
    // paddingTop: '2%',
    //marginBottom: 10,
    justifyContent: 'center',
  },
  marginLeft: {
    marginLeft: '16%',
  },
  marginBottom: {
    marginBottom: '5%',
  },
  fileUploadBox: {
    width: '35%',
    height: '70%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2CB07B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    // paddingBottom: '1%',
  },
  plus: {
    fontSize: 40,
    color: '#999999',
    // backgroundColor: '#ff0',

    textAlign: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  uploadMent: {
    color: '#999999',
    fontSize: 12,
    // paddingBottom: '15%',
  },

  uploadMent2: {
    fontSize: 14,
    color: '#000',
    marginBottom: '1%',
  },
  payMent: {fontSize: 12, color: '#000', marginBottom: '1%'},
  buttonWrap: {
    minHeight: 130,
    height: '10%',
    width: '100%',
    justifyContent: 'flex-end',
    // paddingTop: '10%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    paddingBottom: '10%',
  },
  button: {
    borderRadius: 100,
    width: '50%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: 40,
    // height: 50,
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
  textInputWrap: {
    width: '100%',
    height: '10%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    borderColor: '#2CB07B',
    borderWidth: 1,
    width: '100%',
    height: '80%',
    borderRadius: 3,
    backgroundColor: 'white',
  },
  textInputWrapper: {
    alignItems: 'center',
    height: '10%',
    width: '100%',
    justifyContent: 'center',

    //backgroundColor: '#ff0',
  },
  marginTop: {
    marginTop: 10,
  },
  textInputInfoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  textInputInfoTxtWrap: {},
  textInputInfoTxt: {color: '#000'},
  checkDupBtmWrap: {
    width: '20%',
  },
  textWrapper: {
    alignItems: 'center',
    // paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    // width: '85%',
    backgroundColor: 'white',
    width: '100%',
    height: '13%',
    minHeight: 30,
    borderColor: '#2CB07B',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
  },
  selectWrap: {
    marginLeft: 20,
    width: 50,
    //backgroundColor: '#ff0000',
    height: 20,
    display: 'flex',
    fontSize: 10,
    borderRadius: 2,
  },
  accountWrap: {
    width: 150,
    height: 20,
  },
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#ff0',
    width: '10%',
    height: 20,
  },
});
