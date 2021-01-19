import axios from "../utils/axios";
//import axios from "axios";

//const api = "http://localhost:24813/api/MolecularTest";

const parametros = {
  startDate: "23/01/2020",
  endDate: "25/01/2020",
};

export function signIn(credentials) {
  console.log(parametros);
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/sign-in", credentials)
      //.post("http://localhost:24813/api/MolecularTest", parametros)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
          console.log(response.data);
        }
        reject(response.data);
        console.log("err", response.data, response);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
}

export function signUp(credentials) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/sign-up", credentials)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function resetPassword(credentials) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/reset-password", credentials)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
