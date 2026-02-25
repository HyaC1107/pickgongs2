import React, {useMemo, useState} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ConsumerWebStackParamList} from '../navigationTypes';
import {consumerServices} from '../data/services';

type Props = NativeStackScreenProps<ConsumerWebStackParamList, 'ConsumerFindService'>;

export function ConsumerFindServiceScreen({navigation}: Props) {
  const [keyword, setKeyword] = useState('');

  const filtered = useMemo(() => {
    const key = keyword.trim();
    if (!key) {
      return consumerServices;
    }

    return consumerServices.filter(service => {
      return (
        service.name.includes(key) ||
        service.category.includes(key) ||
        service.location.includes(key)
      );
    });
  }, [keyword]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>← 홈으로</BackText>
        </BackButton>
        <HeaderTitle>업체찾기</HeaderTitle>
      </Header>

      <SearchBox
        placeholder="업체명/지역/카테고리를 입력하세요"
        value={keyword}
        onChangeText={setKeyword}
      />

      <List>
        {filtered.map(service => (
          <ListCard
            key={service.id}
            onPress={() =>
              navigation.navigate('ConsumerServiceDetail', {service})
            }>
            <CardTop>
              <Name>{service.name}</Name>
              <Rating>★ {service.rating}</Rating>
            </CardTop>
            <Meta>{service.category} · {service.location}</Meta>
            <Description numberOfLines={2}>{service.description}</Description>
            <TagRow>
              {service.tags.slice(0, 3).map(tag => (
                <Tag key={tag}>
                  <TagText>{tag}</TagText>
                </Tag>
              ))}
            </TagRow>
          </ListCard>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 22px 24px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity`
  border: 1px solid #d8e0ea;
  border-radius: 8px;
  padding: 8px 12px;
`;

const BackText = styled.Text`
  color: #475569;
  font-weight: 600;
`;

const HeaderTitle = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #111827;
`;

const SearchBox = styled(TextInput)`
  margin-top: 16px;
  border: 1px solid #d1d8e0;
  border-radius: 12px;
  height: 46px;
  padding: 0 14px;
`;

const List = styled.ScrollView`
  margin-top: 16px;
`;

const ListCard = styled.TouchableOpacity`
  border: 1px solid #e4e9f1;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 10px;
`;

const CardTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

const Rating = styled.Text`
  color: #2cb07b;
  font-weight: 700;
`;

const Meta = styled.Text`
  margin-top: 6px;
  color: #64748b;
`;

const Description = styled.Text`
  margin-top: 8px;
  color: #475569;
`;

const TagRow = styled.View`
  margin-top: 10px;
  flex-direction: row;
  gap: 8px;
`;

const Tag = styled.View`
  background-color: #f1f5f9;
  border-radius: 999px;
  padding: 6px 10px;
`;

const TagText = styled.Text`
  color: #334155;
  font-size: 12px;
`;
