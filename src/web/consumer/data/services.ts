export type ConsumerService = {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
};

export const consumerServices: ConsumerService[] = [
  {
    id: 'cons-1',
    name: '하늘 인테리어',
    category: '종합 인테리어',
    location: '서울 마포구',
    rating: 4.8,
    reviews: 126,
    description: '주거 공간 리모델링 전문, 상담부터 시공까지 원스톱으로 진행합니다.',
    tags: ['보증보험 가능', '자격증 보유', '1년 A/S'],
  },
  {
    id: 'cons-2',
    name: '미가 디자인',
    category: '상업 공간',
    location: '서울 강남구',
    rating: 4.7,
    reviews: 94,
    description: '카페/오피스 인테리어 경험이 풍부하며 일정 관리가 꼼꼼합니다.',
    tags: ['빠른 상담', '시공 일정 준수', '친환경 자재'],
  },
  {
    id: 'cons-3',
    name: '스타 리빙',
    category: '부분 리모델링',
    location: '경기 성남시',
    rating: 4.6,
    reviews: 78,
    description: '주방/욕실 부분 공사에 특화된 팀으로 합리적인 견적을 제공합니다.',
    tags: ['부분 시공 전문', '합리적 견적', '사후 관리'],
  },
  {
    id: 'cons-4',
    name: '코지 하우징',
    category: '리모델링',
    location: '인천 연수구',
    rating: 4.9,
    reviews: 153,
    description: '사용자 라이프스타일에 맞춘 설계와 깔끔한 마감이 강점입니다.',
    tags: ['무료 방문 상담', '포트폴리오 다수', '품질 보증'],
  },
];
