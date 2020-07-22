import axios from "axios";
const dogsURL = "https://dog.ceo/api/breeds/image/random";

export default {
    search: function(query) {
        return axios.get(dogsURL)
    }
};