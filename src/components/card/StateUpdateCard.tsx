import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

interface StateCardProps {
  /*
  state 31 : 업체에서날짜변경을요청했을때, 
  state 32 : 업체에게 공사취소요청을 했을때,
  state 33 : 업체가 고객에서 공사취소요청을 했을때
  */
  state: number;
  storeName?: string;
  storeThum?: any;
  date?: string;
}

export default function StateUpdateCard(data: StateCardProps): JSX.Element {
  const {state, storeName, storeThum, date} = data;

  return (
    <View
      style={{
        width: '55%',
        height: 250,
        borderRadius: 10,
        shadowColor: '#ababab',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        backgroundColor: 'white',
        elevation: 3,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '100%',
        }}>
        {storeName && (
          <View
            style={{
              height: '20%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: '700',
                fontSize: 16,
              }}>
              {storeName}
            </Text>
          </View>
        )}

        <View style={{width: 'auto', height: 'auto'}}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.7)',
              width: '72%',
              height: '100%',
              zIndex: 1,
              borderRadius: 5,
              alignItems: 'center',
              padding: '5%',
            }}>
            <Image source={require('@/assets/images/talkicon.png')} />

            {state === 31 && (
              <View
                style={{
                  height: '60%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '100%', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingTop: '10%',
                        fontSize: 12,
                      }}>
                      업체에서{' '}
                    </Text>
                    <Text
                      style={{
                        color: 'red',
                        fontWeight: '600',
                        paddingTop: '10%',
                        fontSize: 12,
                      }}>
                      날짜변경
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingTop: '10%',
                        fontSize: 12,
                      }}>
                      을
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                      fontSize: 12,
                    }}>
                    요청 하였습니다.
                  </Text>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                  <Text
                    style={{color: 'white', fontWeight: '700', fontSize: 12}}>
                    {date && date}
                  </Text>
                </View>
              </View>
            )}

            {state === 32 && (
              <View
                style={{
                  height: '57%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                      paddingTop: '5%',
                    }}>
                    업체에게{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: '600',
                      paddingTop: '5%',
                    }}>
                    공사취소요청
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    paddingTop: '5%',
                  }}>
                  하였습니다.
                </Text>
              </View>
            )}

            {state === 33 && (
              <View
                style={{
                  height: '57%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                      paddingTop: '5%',
                    }}>
                    업체에서{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: '600',
                      paddingTop: '5%',
                    }}>
                    공사취소요청
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    paddingTop: '5%',
                  }}>
                  하였습니다.
                </Text>
              </View>
            )}
          </View>
          {storeThum && <Image source={storeThum} />}
        </View>

        {state !== 32 && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  padding: '10%',
                  color: '#EB701F',
                  fontWeight: '700',
                  paddingRight: '15%',
                }}>
                거절
              </Text>
            </TouchableWithoutFeedback>
            <Image source={require('@/assets/images/vertical-bar.png')} />
            <TouchableWithoutFeedback>
              <Text
                style={{
                  padding: '10%',
                  paddingLeft: '15%',
                  color: '#2CB07B',
                  fontWeight: '700',
                }}>
                수락
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
        {state === 32 && (
          <TouchableWithoutFeedback>
            <Text style={{padding: '10%', color: '#2CB07B', fontWeight: '700'}}>
              수락대기중
            </Text>
          </TouchableWithoutFeedback>
        )}
      </View>
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
  },

  fontaStyle1Wrap: {
    borderTopWidth: 1,
    borderColor: '#F1F1F5',
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fontStyle1: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#656565',
    fontWeight: '600',
  },
  fontStyle2: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#2CB07B',
    fontWeight: '600',
  },
  fontStyleOtherWrap: {
    borderTopWidth: 1,
    borderColor: '#F1F1F5',
    padding: '2%',
    alignItems: 'center',
  },
  fontStyle3: {
    paddingLeft: '5%',
    color: '#EB701F',
    fontWeight: '600',
  },
});
