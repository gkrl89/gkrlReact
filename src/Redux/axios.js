import axios from "axios";
export default axios.create({
  baseURL: "https://62fb40bbabd610251c040f32.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});