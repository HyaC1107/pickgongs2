import React from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ConsumerWebStackParamList} from '../navigationTypes';
import {consumerServices} from '../data/services';

type Props = NativeStackScreenProps<ConsumerWebStackParamList, 'ConsumerHome'>;

export function ConsumerHomeScreen({navigation}: Props) {
  const highlighted = consumerServices.slice(0, 3);

  return (
    <Container>
      <TopBar>
        <Brand>픽공스 Consumer</Brand>
        <TopButton onPress={() => navigation.replace('ConsumerLogin')}>
          <TopButtonText>로그아웃</TopButtonText>
        </TopButton>
      </TopBar>

      <Hero>
        <HeroTitle>내 주변 인테리어 업체를 빠르게 찾아보세요</HeroTitle>
        <HeroDescription>
          지역 기반 추천과 검증된 업체 정보를 한 번에 확인할 수 있어요.
        </HeroDescription>
        <PrimaryAction onPress={() => navigation.navigate('ConsumerFindService')}>
          <PrimaryActionText>업체찾기 시작하기</PrimaryActionText>
        </PrimaryAction>
      </Hero>

      <SectionTitle>추천 업체</SectionTitle>
      <CardRow>
        {highlighted.map(service => (
          <ServiceCard
            key={service.id}
            onPress={() =>
              navigation.navigate('ConsumerServiceDetail', {service})
            }>
            <ServiceName>{service.name}</ServiceName>
            <Meta>{service.category}</Meta>
            <Meta>{service.location}</Meta>
            <Rating>★ {service.rating} ({service.reviews})</Rating>
          </ServiceCard>
        ))}
      </CardRow>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const TopBar = styled.View`
  height: 68px;
  padding: 0 24px;
  border-bottom-width: 1px;
  border-bottom-color: #eef2f7;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #1f2937;
`;

const TopButton = styled.TouchableOpacity`
  border: 1px solid #d4dbe4;
  border-radius: 8px;
  padding: 8px 14px;
`;

const TopButtonText = styled.Text`
  color: #475569;
  font-weight: 600;
`;

const Hero = styled.View`
  margin: 24px;
  border-radius: 16px;
  background-color: #f7fbf9;
  border: 1px solid #dcefe7;
  padding: 24px;
`;

const HeroTitle = styled.Text`
  font-size: 30px;
  line-height: 38px;
  color: #111827;
  font-weight: 800;
`;

const HeroDescription = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #4b5563;
`;

const PrimaryAction = styled.TouchableOpacity`
  margin-top: 18px;
  align-self: flex-start;
  height: 42px;
  border-radius: 10px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  background-color: #2cb07b;
`;

const PrimaryActionText = styled.Text`
  color: #ffffff;
  font-weight: 700;
`;

const SectionTitle = styled.Text`
  margin: 6px 24px 14px;
  font-size: 22px;
  font-weight: 800;
  color: #1f2937;
`;

const CardRow = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 0 24px 24px;
`;

const ServiceCard = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid #e4e9f1;
  border-radius: 12px;
  padding: 16px;
  min-height: 140px;
`;

const ServiceName = styled.Text`
  font-size: 18px;
  color: #0f172a;
  font-weight: 700;
`;

const Meta = styled.Text`
  margin-top: 6px;
  color: #64748b;
`;

const Rating = styled.Text`
  margin-top: 10px;
  color: #2cb07b;
  font-weight: 700;
`;
