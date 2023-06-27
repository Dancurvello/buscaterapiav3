import Axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await Axios.post("http://localhost:3001/login", {
      username,
      password,
    });

    if (response.data.message) {
      return response.data.message;
    }
    return response.data[0].username;
  } catch (error) {
    console.log("Error:", error.message);
  }
};
