import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatListItem, {ChatListItemProps} from './ChatListItem';

export default function ChatList(): JSX.Element {
  const navigation = useNavigation<any>();
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
    <ScrollView contentContainerStyle={styles.chatContainer}>
      {/* <View style={styles.borderContainer}></View> */}
      <ChatListItem {...items[0]} />
      <ChatListItem {...items[1]} />
      <ChatListItem {...items[2]} />
      <ChatListItem {...items[3]} />
      {/* <ChatListItem {...items[0]} />
      <ChatListItem {...items[1]} />
      <ChatListItem {...items[2]} />
      <ChatListItem {...items[3]} />
      <ChatListItem {...items[0]} />
      <ChatListItem {...items[1]} />
      <ChatListItem {...items[2]} />
      <ChatListItem {...items[3]} />
      <ChatListItem {...items[0]} />
      <ChatListItem {...items[1]} />
      <ChatListItem {...items[2]} />
      <ChatListItem {...items[3]} />
      <ChatListItem {...items[0]} />
      <ChatListItem {...items[1]} />
      <ChatListItem {...items[2]} />
      <ChatListItem {...items[3]} /> */}
    </ScrollView>
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
