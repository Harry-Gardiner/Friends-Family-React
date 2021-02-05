// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://localhost:8000/api/",   // points to Virtual Machine backend
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});