import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import NoticeTab from '@/components/user/notice/NoticeTab';
import EventTab from '@/components/user/notice/EventTab';

export default function Notice(): JSX.Element {
  const navigation = useNavigation<any>();
  const [check, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  useEffect(() => {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }, []);
  const noticedata = [
    {
      title: '[공지] 사기당하신 고객님 여러분',
      date: '2023-03-02',
      description: '현재   많은 이용고객님들중 ',
      index: 0,
    },
    {
      title: '[공지] 사기당하신 고객님 여러분',
      date: '2023-03-02',
      description: '현재 많은 이용고객님들중 ',
      index: 1,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignItems: 'flex-end',
          height: '15%',
          borderBottomWidth: 1,
          borderColor: '#E9EDEF',
          marginLeft: '5%',
          marginBottom: '3%',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(true);
            setCheck2(false);
          }}>
          <View style={{padding: '5%'}}>
            <Text
              style={
                check
                  ? {fontWeight: '700', color: '#2CB07B'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              공지사항
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(false);
            setCheck2(true);
          }}>
          <View style={{padding: '5%'}}>
            <Text
              style={
                check2
                  ? {fontWeight: '700', color: '#2CB07B'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              이벤트
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {check && <NoticeTab data={noticedata} />}
      {check2 && <EventTab />}
    </View>
  );
}
