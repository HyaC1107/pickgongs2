import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ConsumerWebStackParamList} from '../navigationTypes';

type Props = NativeStackScreenProps<ConsumerWebStackParamList, 'ConsumerLogin'>;

export function ConsumerLoginScreen({navigation}: Props) {
  return (
    <Container>
      <Card>
        <Title>소비자 로그인</Title>
        <SubTitle>시공 전문가 찾고, 픽! 할 땐 픽공스</SubTitle>
        <InputGroup>
          <StyledInput placeholder="아이디" />
          <StyledInput placeholder="비밀번호" secureTextEntry />
        </InputGroup>
        <LoginButton onPress={() => navigation.replace('ConsumerHome')}>
          <ButtonLabel>로그인</ButtonLabel>
        </LoginButton>
      </Card>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Card = styled.View`
  width: 100%;
  max-width: 420px;
  border: 1px solid #e3e8ee;
  border-radius: 16px;
  padding: 28px;
  gap: 10px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #1f2937;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 10px;
`;

const InputGroup = styled.View`
  gap: 10px;
`;

const StyledInput = styled(TextInput)`
  border: 1px solid #d1d8e0;
  border-radius: 10px;
  height: 46px;
  padding: 0 14px;
  font-size: 14px;
`;

const LoginButton = styled.TouchableOpacity`
  margin-top: 12px;
  background-color: #2cb07b;
  border-radius: 10px;
  height: 46px;
  align-items: center;
  justify-content: center;
`;

const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;
