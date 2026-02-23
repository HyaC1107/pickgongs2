import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

/* 
* qnaProps props
1. props 종류: title, date, description, index, state
2. props 설명
- title : 공지사항 제목
- date : 공지 일자
- question : 질문상세내용
- answer : 답변 상세내용 (아코디언)
- state : 답변상태값 ( 1 : 확인중, 2 : 답변완료 )
- index : 공지사항 list key값 (해당값으로 아코디언 개별 여닫기여부 식별하도록 예시구현)
*/
interface QnATabProps {
  data: QnATabItemProps[];
}
export interface QnATabItemProps {
  title: string;
  date: string;
  question: any;
  answer: any;
  index: number;
  state: number;
}
export default function QnATab(qnaProps: QnATabProps): JSX.Element {
  const {data} = qnaProps;
  const navigation = useNavigation<any>();
  const [tabOpen, setTabOpen] = useState(false);
  const [selectedItem, setItem] = useState(-1);

  useEffect(() => {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {data.map((el, i) => {
        return (
          <View key={i}>
            <TouchableWithoutFeedback
              onPress={() => {
                setTabOpen(!tabOpen);
                if (el.index === selectedItem) {
                  setItem(-1);
                } else {
                  setItem(i);
                }
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignItems: 'flex-end',
                  marginLeft: '5%',
                  justifyContent: 'space-between',
                }}>
                <View style={{padding: '5%', gap: 5}}>
                  <Text style={{fontSize: 12}}>{el.date}</Text>
                  <Text style={{}}>{el.title}</Text>
                </View>
                <View style={{padding: '5%'}}>
                  {el.state === 1 ? (
                    <Text style={{color: '#B4B4B4', fontSize: 12}}>확인중</Text>
                  ) : (
                    <Text style={{color: '#2CB07B', fontSize: 12}}>
                      답변완료
                    </Text>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
            {/* 1:1문의 단건 아코디언 예제 구현 (실제 기능에맞게 프론트엔드 개발하여 이용) */}
            {el.index === selectedItem && el.state === 2 && (
              <View style={{width: '100%', alignItems: 'center'}}>
                <View
                  style={{
                    width: '90%',
                    backgroundColor: '#F6F6F6',
                    paddingTop: '5%',
                    paddingBottom: '5%',
                    paddingLeft: '3%',
                    paddingRight: '4%',
                    gap: 30,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      gap: 10,
                    }}>
                    <Image
                      source={require('@/assets/images/question-mark.png')}
                    />
                    <Text style={{fontSize: 10, width: '80%', marginTop: '2%'}}>
                      {el.question}
                    </Text>
                    <Text
                      style={{
                        color: '#656565',
                        // position: 'absolute',
                        // top: -5,
                        // right: 2,
                      }}>
                      수정
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      gap: 10,
                    }}>
                    <Image source={require('@/assets/images/ans-mark.png')} />
                    <Text style={{fontSize: 10, width: '80%', marginTop: '2%'}}>
                      {el.answer}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
