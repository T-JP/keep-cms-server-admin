import Axios from "axios";

import QS from "qs";
const config = {
  baseURL: "http://localhost:8888/v1/api",
  // baseURL: "http://tjp.pub/v1/api",
  timeout: 60000,
  maxContentLength: Infinity,
  withCredentials: true,
  transformRequest: [
    function(data) {
      return QS.stringify(data, { skipNulls: true });
    }
  ]
  // transformResponse: [
  //   function(data) {
  //     // Do whatever you want to transform the data

  //     console.log(data, "asdf");
  //     return data;
  //   }
  // ]
};
const axios = Axios.create(config);

axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
});
export default axios;
