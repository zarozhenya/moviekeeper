import {IMovie} from './api';

export enum TabEnum {
  Home,
  Movies,
  Profile,
}

export type RootNavigatorParamList = {
  Tabs: undefined;
  Details: {movie: IMovie};
};

export type MainStackParamList = {
  Home: undefined;
  Movies: undefined;
  Profile: undefined;
};
