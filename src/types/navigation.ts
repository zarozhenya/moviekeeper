export enum TabEnum {
  Home,
  Movies,
  Profile,
}

export type RootNavigatorParamList = {
  Tabs: undefined;
  Details: {movieId: number};
};

export type MainStackParamList = {
  Home: undefined;
  Movies: undefined;
  Profile: undefined;
};
