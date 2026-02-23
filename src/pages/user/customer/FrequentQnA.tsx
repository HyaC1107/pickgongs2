import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import NoticeTab from '@/components/user/notice/NoticeTab';
import EventTab from '@/components/user/notice/EventTab';

export default function FrequentQnA(): JSX.Element {
  const navigation = useNavigation<any>();
  const [check, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  useEffect(() => {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }, []);
  const noticedata = [
    {
      title: 'Q. 비밀번호 수정은 어떻게 하나요?',
      date: '2023-03-02',
      description: '',
      index: 0,
    },
    {
      title: 'Q. 회원탈퇴는 어떻게 하나요?',
      date: '2023-03-02',
      description:
        '회원 탈퇴는 마이페이지 - 정보수정 탭으로 이동하셔서 하단에 탈퇴기능이 있습니다 회원탈퇴 후 정보는 삭제 됩니다',
      index: 1,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignItems: 'center',
          height: '10%',
          borderBottomWidth: 1,
          borderColor: '#E9EDEF',
          marginLeft: '5%',
          marginBottom: '3%',
          padding: '3%',
          gap: 10,
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(true);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
            setCheck5(false);
          }}>
          <View>
            <Text
              style={
                check
                  ? {fontWeight: '700'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              전체
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(false);
            setCheck2(true);
            setCheck3(false);
            setCheck4(false);
            setCheck5(false);
          }}>
          <View>
            <Text
              style={
                check2
                  ? {fontWeight: '700'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              로그인&회원가입
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(false);
            setCheck2(false);
            setCheck3(true);
            setCheck4(false);
            setCheck5(false);
          }}>
          <View>
            <Text
              style={
                check3
                  ? {fontWeight: '700'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              이용문의
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck4(true);
            setCheck5(false);
          }}>
          <View>
            <Text
              style={
                check4
                  ? {fontWeight: '700'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              업체질문
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
            setCheck5(true);
          }}>
          <View>
            <Text
              style={
                check5
                  ? {fontWeight: '700'}
                  : {color: '#B4B4B4', fontWeight: '700'}
              }>
              시공
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* Dummy 데이터이므로 수정하여 사용 */}
      {check && <NoticeTab data={noticedata} />}
      {check2 && <NoticeTab data={noticedata} />}
      {check3 && <NoticeTab data={noticedata} />}
      {check4 && <NoticeTab data={noticedata} />}
      {check5 && <NoticeTab data={noticedata} />}
    </View>
  );
}
