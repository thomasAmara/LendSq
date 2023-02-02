import { actionType } from './ActionType';

const { VIEWCUSTOMER } = actionType;

const initialState = {
  customerInfo: {},
};

export const customerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEWCUSTOMER:
      return {
        ...state,
        customerInfo: payload,
      };
    default:
      return state;
  }
};
