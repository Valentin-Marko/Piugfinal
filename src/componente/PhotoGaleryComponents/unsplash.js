import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zfjZUHHgGDze2rtmO1Mbx4QQM2LVRqBRpqKpxSOYGYI",
  },
});
