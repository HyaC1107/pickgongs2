import type {ConsumerService} from './data/services';

export type ConsumerWebStackParamList = {
  ConsumerLogin: undefined;
  ConsumerHome: undefined;
  ConsumerFindService: undefined;
  ConsumerServiceDetail: {service: ConsumerService};
};
