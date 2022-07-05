import axios from "axios";

import { API_SCHEME, API_DOMAIN, API_PORT } from "react-native-dotenv";

export default axios.create({
  baseURL: `${API_SCHEME}://${API_DOMAIN}:${API_PORT}`,
});
