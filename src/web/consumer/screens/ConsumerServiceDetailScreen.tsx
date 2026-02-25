import React from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ConsumerWebStackParamList} from '../navigationTypes';

type Props = NativeStackScreenProps<ConsumerWebStackParamList, 'ConsumerServiceDetail'>;

export function ConsumerServiceDetailScreen({route, navigation}: Props) {
  const {service} = route.params;

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackText>← 목록으로</BackText>
      </BackButton>

      <HeaderCard>
        <Title>{service.name}</Title>
        <Meta>{service.category} · {service.location}</Meta>
        <Rating>★ {service.rating} ({service.reviews}개 리뷰)</Rating>
      </HeaderCard>

      <Section>
        <SectionTitle>업체 소개</SectionTitle>
        <Body>{service.description}</Body>
      </Section>

      <Section>
        <SectionTitle>강점</SectionTitle>
        <TagWrap>
          {service.tags.map(tag => (
            <Tag key={tag}>
              <TagText>{tag}</TagText>
            </Tag>
          ))}
        </TagWrap>
      </Section>

      <RequestButton>
        <RequestButtonText>상담 요청하기</RequestButtonText>
      </RequestButton>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 22px 24px;
`;

const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
  border: 1px solid #d8e0ea;
  border-radius: 8px;
  padding: 8px 12px;
`;

const BackText = styled.Text`
  color: #475569;
  font-weight: 600;
`;

const HeaderCard = styled.View`
  margin-top: 16px;
  border: 1px solid #e4e9f1;
  border-radius: 14px;
  padding: 18px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
`;

const Meta = styled.Text`
  margin-top: 8px;
  color: #64748b;
`;

const Rating = styled.Text`
  margin-top: 10px;
  color: #2cb07b;
  font-weight: 700;
`;

const Section = styled.View`
  margin-top: 18px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

const Body = styled.Text`
  margin-top: 8px;
  color: #334155;
  line-height: 22px;
`;

const TagWrap = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.View`
  background-color: #f1f5f9;
  border-radius: 999px;
  padding: 7px 11px;
`;

const TagText = styled.Text`
  color: #334155;
`;

const RequestButton = styled.TouchableOpacity`
  margin-top: 26px;
  align-self: flex-start;
  background-color: #2cb07b;
  border-radius: 10px;
  height: 44px;
  padding: 0 18px;
  align-items: center;
  justify-content: center;
`;

const RequestButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
`;
