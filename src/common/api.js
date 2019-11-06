import axios from "axios";

const BASE_URL =
  "https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien"; 
const API = {
  get() {
    return axios.get(`${BASE_URL}`).then(function(offers) {
      return offers;
    });
  }
};

export default API;
