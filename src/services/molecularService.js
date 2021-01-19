import axios from "axios";
const apiUrl = "http://localhost:24813/api/";

export function testMolecular(parametros) {
  console.log(parametros);
  return new Promise((resolve, reject) => {
    axios
      //.post("/api/auth/sign-in", credentials)
      .post(apiUrl + "MolecularTest", parametros)
      .then((response) => {
        console.log("dataCovd", response);
        if (response.status === 200) {
          resolve(response.data);
          console.log("dataCovd", response.data);
        }
        reject(response.data);
        console.log("dataCovd", response.data);
      })
      .catch((error) => {
        reject(error);
        console.log("dataCovd", error);
      });
  });
}
