export enum NavigationRoute {
  HOME = 'Home',
  DETAIL = 'Detail'
}

export type RootStackParamList = {
  [NavigationRoute.HOME]: undefined;
  [NavigationRoute.DETAIL]: undefined;
};
