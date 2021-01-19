import * as types from "../../constants";
import { testMolecular as TestMolecularCovid } from "../../services/molecularService";

export function testMolecular(parametros) {
  return async (dispatch) => {
    dispatch({ type: types.TEST_MOLECULAR_IN_REQUEST });

    return TestMolecularCovid(parametros)
      .then((response) => {
        console.log(response);
        dispatch({
          type: types.TEST_MOLECULAR_IN_SUCCESS,
          slope: response.slope,
          negative: response.negative,
          positive: response.positive,
          total: response.total,
        });
      })
      .catch((error) => {
        dispatch({ type: types.TEST_MOLECULAR_IN_FAILURE });
        throw error;
      });
  };
}
