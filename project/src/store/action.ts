import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../consts';

export const ActionType = {
  REDIRECT_TO_ROUTER: 'redirectToRoute',
};

export const redirectToRoute = createAction<AppRoute>(ActionType.REDIRECT_TO_ROUTER);
