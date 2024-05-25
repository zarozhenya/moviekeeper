export enum TabEnum {
  Home,
  Movies,
  Profile,
}

export type RootNavigatorParamList = {
  Authorization: undefined;
  Tabs: undefined;
  Details: {movieId: string};
  Language: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Movies: undefined;
  Profile: undefined;
};
