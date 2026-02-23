import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatListItem, {ChatListItemProps} from './ConstructionChatListIem';
import {WINDOW_WIDTH} from '@/constants/context';

export default function ConstructionChatList(): JSX.Element {
  const navigation = useNavigation<any>();
  const [item, setItem] = useState(1);

  const items: ChatListItemProps[] = [
    {
      thumbnail: require('@/assets/images/chat/pick1.png'),
      sender: '한마음인테리어',
      chatContents: '안녕하세요 고객님',
      receivedTime: '오전 09:00',
      numberOfMessage: 10,
      disconnected: false,
    },
    {
      thumbnail: require('@/assets/images/chat/chat-star-thum.png'),
      sender: '스타인테리어',
      chatContents: '안녕하세요 고객님',
      receivedTime: '2023-05-01',
      numberOfMessage: 1,
      disconnected: false,
    },
    {
      thumbnail: require('@/assets/images/chat/chat-cozy-thum.png'),
      sender: '코지인테리어',
      chatContents: '안녕하세요 고객님',
      receivedTime: '2023-05-02',
      numberOfMessage: 1,
      disconnected: false,
    },
    {
      thumbnail: require('@/assets/images/chat/chat-miga-thum.png'),
      sender: '미가인테리어',
      chatContents: '다른 시공업체를 선택하였습니다 업체와 대화가...',
      receivedTime: '2023-05-02',
      numberOfMessage: 0,
      disconnected: true,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setItem(1);
          }}>
          <View
            style={
              item === 1
                ? {
                    width: WINDOW_WIDTH * 0.45,
                    borderBottomWidth: 2,
                    borderColor: '#2CB07B',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
                : {
                    width: WINDOW_WIDTH * 0.45,
                    borderBottomWidth: 2,
                    borderColor: '#F9F9F9',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
            }>
            <Text
              style={
                item === 1
                  ? {color: '#2CB07B', fontWeight: '600'}
                  : {color: '#CCCCCC'}
              }>
              고객 채팅방
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setItem(2);
          }}>
          <View
            style={
              item === 2
                ? {
                    width: WINDOW_WIDTH * 0.45,
                    borderBottomWidth: 2,
                    borderColor: '#2CB07B',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
                : {
                    width: WINDOW_WIDTH * 0.45,
                    borderBottomWidth: 1,
                    borderColor: '#F9F9F9',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
            }>
            <Text
              style={
                item === 2
                  ? {color: '#2CB07B', fontWeight: '600'}
                  : {color: '#CCCCCC'}
              }>
              중장비 채팅방
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {item === 1 && (
        <ScrollView contentContainerStyle={styles.chatContainer}>
          {/* <View style={styles.borderContainer}></View> */}
          <ChatListItem {...items[0]} />
          <ChatListItem {...items[1]} />
          <ChatListItem {...items[2]} />
          <ChatListItem {...items[3]} />
        </ScrollView>
      )}
      {item === 2 && (
        <ScrollView contentContainerStyle={styles.chatContainer}>
          {/* <View style={styles.borderContainer}></View> */}
          <ChatListItem {...items[0]} />
          <ChatListItem {...items[1]} />
          <ChatListItem {...items[3]} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  borderContainer: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    height: 1,
    marginVertical: 10,
  },
});
