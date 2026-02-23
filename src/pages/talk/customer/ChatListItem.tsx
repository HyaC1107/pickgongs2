import {WINDOW_HEIGHT} from '@/constants/context';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
export interface ChatListItemProps {
  thumbnail: ImageProps;
  sender: string;
  chatContents: string;
  receivedTime: string;
  numberOfMessage: number;
  disconnected: boolean;
}

export default function ChatListItem(props: ChatListItemProps): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('ChatRoom', {
          sender: props.sender,
          senderAddress: '서울시 마포구 염리동 50-1 1층',
          thumbnail: props.thumbnail,
          disconnected: props.chatContents,
        });
      }}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={props.thumbnail}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={styles.contentsContinaer}>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              {props.sender}
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#656565',
              }}>
              {props.receivedTime}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 11,
                color: '#999',
              }}>
              {props.chatContents}
            </Text>
            {props.numberOfMessage > 0 ? (
              <View style={styles.messageCircle}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                  }}>
                  {props.numberOfMessage}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: WINDOW_HEIGHT * 0.13,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  chatContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '18%',
    height: '90%',
  },
  contentsContinaer: {
    width: '75%',
    height: '70%',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageCircle: {
    width: 40,
    height: 18,
    backgroundColor: '#f00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
