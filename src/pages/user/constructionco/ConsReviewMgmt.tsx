import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import CreateReviewSuccessPopup from '@/components/popup/CreateReviewSuccessPopup';

export default function ConsReviewMgmt(): JSX.Element {
  const navigation = useNavigation<any>();

  const data = [
    {
      index: 0,
      thumUrl: require('@assets/images/review-thum-1.png'),
      storeNm: '한마음인테리어',
      createDt: '2023.04.05',
      isReviewed: true,
      review:
        '사장님 덕분에 인테리어 잘 했습니다. 다른곳보다 저렴하고 상담도 친절하게 해주셔서 가게 오픈도 정확한 날짜에 오픈 하고 잘했습니다. 감사합니다 그리고 엄청 꼼꼼하게 봐주셔서 알지 못했던 것 부분도 착오 없이 진행했습니다',
    },
    {
      index: 1,
      thumUrl: require('@assets/images/review-thum-2.png'),
      storeNm: '스타인테리어',
      createDt: undefined,
      isReviewed: false,
      review: '아직 리뷰를 작성하지 않았어요! 리뷰를 작성해 주세요!',
    },
  ];

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            width: Dimensions.get('window').width,
            padding: '5%',
          }}>
          <FlatList
            horizontal={false}
            data={data}
            renderItem={i => (
              <View
                key={i.index}
                style={{
                  width: Dimensions.get('window').width - 30,
                  justifyContent: 'center',
                  paddingBottom: '5%',
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '5%',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={i.item.thumUrl} />
                    <Text style={{paddingLeft: '2%'}}>{i.item.storeNm}</Text>
                  </View>
                  {i.item.createDt ? (
                    <Text>{i.item.createDt}</Text>
                  ) : (
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.navigate('ReviewWrite');
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 10,
                        }}>
                        <Text style={{color: '#2CB07B'}}>리뷰남기기</Text>
                        <Image
                          source={require('@assets/images/create-review.png')}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                </View>
                <View
                  style={{
                    width: '100%',
                    padding: '5%',
                    borderRadius: 5,
                    backgroundColor: '#F6F6F6',
                  }}>
                  {i.item.isReviewed && (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '90%',
                      }}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          width: 100,
                          height: 100,
                          marginRight: '5%',
                        }}></View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          width: 100,
                          height: 100,
                          marginRight: '5%',
                        }}></View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          width: 50,
                          height: 100,
                          marginRight: '5%',
                        }}></View>
                    </View>
                  )}
                  {i.item.isReviewed ? (
                    <View
                      style={{
                        width: '100%',
                        paddingTop: '5%',
                        paddingBottom: '5%',
                      }}>
                      <Text>{i.item.review}</Text>
                    </View>
                  ) : (
                    <View
                      style={{
                        width: '100%',
                      }}>
                      <Text>{i.item.review}</Text>
                    </View>
                  )}
                  {i.item.isReviewed && (
                    <View
                      style={{
                        width: '100%',
                        padding: '5%',
                        borderRadius: 5,
                        backgroundColor: '#FFFFF6',
                      }}>
                      <View
                        style={{
                          paddingLeft: '2%',
                          width: '100%',
                          paddingTop: '1%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingBottom: '2%',
                        }}>
                        <Image
                          style={{
                            position: 'absolute',
                            top: '-100%',
                          }}
                          source={require('@/assets/images/balloon.png')}
                        />
                        <Image
                          source={require('@/assets/images/master-thum.png')}
                        />
                        <Text style={{paddingLeft: '5%'}}>사장님</Text>
                      </View>
                      <Text>
                        감사합니다 무슨일 있으시면 바로 연락주세요 번창하세요
                        사장님!
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {/* <CreateReviewPopup /> */}
      {/* <CreateReviewSuccessPopup /> */}
    </View>
  );
}
