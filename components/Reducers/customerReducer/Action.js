import { actionType } from './ActionType';

const { VIEWCUSTOMER } = actionType;

export const view = (payload) => ({
  payload,
  type: VIEWCUSTOMER,
});
