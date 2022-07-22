import axios from 'axios'

const ZumunityoAxios = function(url, method, callback) {
  axios(
    {
      url: url,
      method: method
    }
  ).then( response => {
    callback(response.data);
  });
}

export default ZumunityoAxios;