import axios from "axios";

export default {
    createUser: function (user) {
        console.log("am i here? api" + user.name);
        // return axios.get("https://second-time-around-api.herokuapp.com/" + user);
        return axios.post("http://localhost:8080/api/users" + user)
    }
}


