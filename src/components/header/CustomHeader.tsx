import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ..
interface CustomHeaderProp {
  title: string | JSX.Element;
  isLogin?: boolean;
}
export default function CustomHeader(data: CustomHeaderProp) {
  const {title, isLogin} = data;
  const [isPress, setState] = useState(false);
  const navigate = useNavigation<any>();
  return (
    <View style={styles.headerRootWrap}>
      <TouchableWithoutFeedback onPress={() => navigate.goBack()}>
        <View style={styles.backWrap}>
          <Image source={require('@/assets/images/chevron-0.7.png')} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setState(!isPress);
        }}>
        <View style={styles.headerTitleWrap}>
          {typeof title === 'string' ? (
            <Text style={styles.titleStyle}>{title}</Text>
          ) : (
            title
          )}
        </View>
      </TouchableWithoutFeedback>
      {isLogin && (
        <TouchableWithoutFeedback onPress={() => navigate.navigate('Alarm')}>
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('@/assets/images/alarm0.5.png')} />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View style={styles.backWrap}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerRootWrap: {
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
  },
  backWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff0',
    width: '20%',
  },
  headerTitleWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#ff0000',
    width: '60%',
    height: '100%',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  // icon: {
  //   width: 15,
  //   height: 23,
  // },
});
