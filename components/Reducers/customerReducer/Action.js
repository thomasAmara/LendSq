import { actionType } from './Actiontype';

const { VIEWCUSTOMER } = actionType;

export const view = (payload) => ({
  payload,
  type: VIEWCUSTOMER,
});
