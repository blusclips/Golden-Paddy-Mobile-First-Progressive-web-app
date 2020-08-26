/** @format */
const TEST_ACTION = 'cb5609ac-80d7-49e1-bf1f-e62cadf1c6a4';

const initialState = {
  isLoggedIn: false,
};

export default function appReducer(state = initialState, action: any) {
  const payload = action.data;
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        isLoggedIn: payload,
      };
    default:
      return state;
  }
}

export const appTestAction = (data: boolean) => {
  return { type: TEST_ACTION, data };
};
