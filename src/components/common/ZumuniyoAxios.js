import axios from 'axios'

const ZumuniyoAxios = function(url, method,params, callback) {
  axios(
    {
      url: url,
      method: method,
      data:params
    }
  ).then( response => {
    callback(response.data);
  });
}

export default ZumuniyoAxios;