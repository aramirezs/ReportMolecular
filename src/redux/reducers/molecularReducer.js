import * as types from "../../constants";

export default function reducer(state = {}, actions) {
  console.log(actions);
  switch (actions.type) {
    case types.TEST_MOLECULAR_IN_SUCCESS:
      return {
        ...state,
        data: {
          slope: actions.slope,
          positive: actions.positive,
          negative: actions.negative,
          total: actions.total,
        },
      };

    default:
      return state;
  }
}
