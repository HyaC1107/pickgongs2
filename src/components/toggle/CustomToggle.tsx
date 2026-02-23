import * as React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface Props {
  onColor: string;
  offColor: string;
  label: string;
  onToggle: () => void;
  style: object;
  isOn: boolean;
  labelStyle: object;
}

interface DefaultProps {
  onColor: string;
  offColor: string;
  label: string;
  onToggle: () => void;
  style: object;
  isOn: boolean;
  labelStyle: object;
}

export default class Toggle extends React.PureComponent<Props> {
  animatedValue = new Animated.Value(0);

  static defaultProps: DefaultProps = {
    onColor: '#2CB07B',
    offColor: '#2CB07B',
    label: '',
    onToggle: () => {},
    style: {},
    isOn: false,
    labelStyle: {},
  };

  render() {
    const moveToggle = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20],
    });

    const {isOn, onColor, offColor, style, onToggle, labelStyle, label} =
      this.props;

    const color = isOn ? onColor : offColor;

    this.animatedValue.setValue(isOn ? 0 : 1);

    Animated.timing(this.animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    return (
      <View style={styles.container}>
        {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

        <TouchableWithoutFeedback
          onPress={() => {
            typeof onToggle === 'function' && onToggle();
          }}>
          <View
            style={[styles.toggleContainer, style, {backgroundColor: color}]}>
            {isOn && (
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  //ackgroundColor: '#ff0',
                  paddingLeft: '10%',
                  color: 'white',
                }}>
                상가
              </Text>
            )}
            <Animated.View
              style={[
                styles.toggleWheelStyle,
                {
                  marginLeft: moveToggle,
                },
              ]}></Animated.View>
            {!isOn && (
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  //ackgroundColor: '#ff0',
                  paddingLeft: '10%',
                  color: 'white',
                }}>
                우리집
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleContainer: {
    width: 80,
    height: 30,
    marginLeft: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    //justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    marginRight: 2,
  },
  toggleWheelStyle: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 12.5,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});
