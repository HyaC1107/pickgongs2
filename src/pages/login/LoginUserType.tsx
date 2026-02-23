import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import TypeCard from '@/components/usertype/TypeCard';
import {useNavigation} from '@react-navigation/native';

export default function LoginUserType(): JSX.Element {
  const navigation = useNavigation<any>();
  const [userType, setType] = useState('heavy');
  const house = require('@/assets/images/house.png');
  const personFill = require('@/assets/images/person-fill.png');
  return (
    <View style={styles.rootWrapper}>
      <View style={styles.userTypeCommt}>
        <Text style={styles.commtStyle}>회원가입 유형은 선택하세요</Text>
      </View>
      <View style={styles.typeCardRootWrap}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log(userType);
          }}>
          {/* type card에서 회원가입유형 선택 */}
          <TypeCard
            text="회원"
            value="customer"
            imageSrc={personFill}
            setType={setType}
            userType={userType}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            // setType('partner');
            console.log(userType);
          }}>
          <TypeCard
            text="파트너"
            value="construction"
            imageSrc={house}
            setType={setType}
            userType={userType}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (userType === 'customer') {
              navigation.navigate('SignUp', {userType: 'customer'});
            } else if (userType === 'heavy') {
              navigation.navigate('SignUpEnterIntro', {
                userType: 'heavy',
              });
            } else {
              navigation.navigate('SignUpEnterIntro', {
                userType: 'construction',
              });
            }
          }}>
          <View style={styles.button}>
            <Text style={styles.btnText}>다음</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  typeCardRootWrap: {
    justifyContent: 'space-between',
    flex: 2.7,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '85%',
  },
  userTypeCommt: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    flex: 1.3,
  },
  commtStyle: {
    color: '#000',
    fontSize: 20,
  },
  buttonWrap: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    // paddingTop: '10%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
  },
  button: {
    borderRadius: 100,
    width: '50%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: '30%',
    // height: 50,
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
