import type { TBreadcrumb } from './breadcrumbs';
/*
 * state -- history state of app
 * route -- url of a new breadcrumb  */
export const isContainRoute = (state: Array<TBreadcrumb>, route: string) =>
  state.some(({ url }) => url === route);

/*
 * state -- history state of app
 * url -- url of current breadcrumb */
export const removeRemainingCrumbs = (state: Array<TBreadcrumb>, url: string) => {
  const index = state.findIndex(({ url: route }) => route === url);
  return state.slice(0, index);
};
