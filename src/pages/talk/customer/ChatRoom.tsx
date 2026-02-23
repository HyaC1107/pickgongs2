import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomHeader from '@/components/header/CustomHeader';
import ChatHeader from '@/components/header/ChatHeader';
import Yourchat, {YourChatProps} from './YourChat';
import Mychat, {MyChatProps} from './MyChat';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function ChatRoom(): JSX.Element {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [isOpen, setOpen] = useState(false);

  const yourChat1: YourChatProps = {
    topMargin: '15%',
    thumbnail: require('@/assets/images/chat/chat-thum.png'),
    chatContents: '안녕하세요 고객님 \n 어떤 공사를 진행 하시는 걸까요?',
    timeStamp: '오전 10:20',
  };
  const myChat1: MyChatProps = {
    topMargin: '12%',
    chatContents: '아파트 인테리어를 진행하고 싶어요',
  };
  const myChat2: MyChatProps = {
    topMargin: '2%',
    chatContents: '20평대 아파트인데 평당 가격이 얼마인가요?',
    timeStamp: '10. 12 AM',
  };
  const myChat3: MyChatProps = {
    topMargin: '2%',
    chatContents: '20평대 아파트인데 평당 가격이 얼마인가요?',
    attachedImage: require('@/assets/images/chat/attached-img.png'),
  };

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <ChatHeader
          sender={route.params.sender}
          senderAddress={route.params.senderAddress}
          thumbnail={route.params.thumbnail}
        />
      ),
    });
  }, []);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.chatRoomContainer}>
          <Yourchat {...yourChat1} />
          <Mychat {...myChat1} />
          <Mychat {...myChat2} />
          {/* <Mychat {...myChat3} />
          <Mychat {...myChat3} /> */}
          {/* <Mychat {...myChat3} />
          <Mychat {...myChat3} />
          <Mychat {...myChat3} /> */}
          <Mychat {...myChat3} />
          {route.params.disconnected && (
            <View
              style={{
                width: WINDOW_WIDTH,
                alignItems: 'center',
                gap: 20,
                paddingTop: '10%',
              }}>
              <View style={{width: '100%', alignItems: 'center', gap: 2}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.3),
                    color: '#0E2A47',
                  }}>
                  다른 시공업체를 선택하였습니다
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.3),
                    color: '#0E2A47',
                  }}>
                  업체와 대화가 불가능합니다
                </Text>
              </View>
              <View style={{width: '100%', alignItems: 'center', gap: 5}}>
                <Image source={require('@/assets/images/chat/out.png')} />
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  대화방나가기
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View
          style={{
            width: WINDOW_WIDTH * 0.1,
            height: WINDOW_HEIGHT * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableWithoutFeedback
            style={{width: WINDOW_WIDTH * 0.1, height: WINDOW_HEIGHT * 0.06}}
            onPress={() => {
              setOpen(!isOpen);
            }}>
            <Image source={require('@/assets/images/chat/open.png')} />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            height: WINDOW_HEIGHT * 0.06,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image source={require('@/assets/images/chat/divide.png')} />
        </View>
        <View
          style={{
            width: WINDOW_WIDTH * 0.8,
            backgroundColor: 'white',
            height: WINDOW_HEIGHT * 0.06,
            flexDirection: 'row',
          }}>
          <TextInput></TextInput>
        </View>
        <View
          style={{
            width: WINDOW_WIDTH * 0.1,
            height: WINDOW_HEIGHT * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image source={require('@/assets/images/chat/send.png')} />
        </View>
      </View>
      {isOpen && (
        <View
          style={{
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT * 0.15,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#F9F9F9',
            gap: 40,
          }}>
          <View style={{alignItems: 'center', gap: 10}}>
            <Image source={require('@/assets/images/chat/photo.png')} />
            <Text style={{fontSize: responsiveFontSize(1.4)}}>
              사진첨부하기
            </Text>
          </View>
          <View style={{alignItems: 'center', gap: 10}}>
            <Image source={require('@/assets/images/chat/docs.png')} />
            <Text style={{fontSize: responsiveFontSize(1.4)}}>견적서보기</Text>
          </View>
          <View style={{alignItems: 'center', gap: 10}}>
            <Image source={require('@/assets/images/chat/out.png')} />
            <Text style={{fontSize: responsiveFontSize(1.4)}}>
              대화방나가기
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chatRoomContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingBottom: '10%',
  },
  borderContainer: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    height: 1,
    marginVertical: 10,
  },
});
