import React, {useEffect} from 'react';
import {
  DimensionValue,
  Image,
  ImageProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export interface YourChatProps {
  topMargin: DimensionValue;
  thumbnail: ImageProps;
  chatContents: string;
  timeStamp: string;
}

export default function YourChat(props: YourChatProps): JSX.Element {
  return (
    <View style={{...styles.chatContainer, marginTop: props.topMargin}}>
      <Image
        resizeMode="contain"
        style={{
          width: 50,
          height: 50,
        }}
        source={require('@/assets/images/chat/pick1.png')}></Image>
      <View style={styles.chatBubble}>
        <Text
          style={{
            fontSize: 13,
          }}>
          안녕하세요 고객님{'\n'}어떤 공사를 진행 하시는 걸까요?
        </Text>
      </View>
      <View style={styles.timeStamp}>
        <Text
          style={{
            color: '#8b8b8b',
            fontSize: 9,
          }}>
          오전 10:20
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '10%',
  },
  chatBubble: {
    backgroundColor: '#fff',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    maxWidth: '60%',
  },
  timeStamp: {
    marginLeft: 5,
    justifyContent: 'flex-end',
  },
});
