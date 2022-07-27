import axios from 'axios'

const ZumuniyoAxios = function(url, method,params, callback) {

  const data = new URLSearchParams();
  
  for(let key in params){
    data.append(key,params[key]);
  };

  axios(
    {
      url: url,
      method: method,
      data:data
    }
  ).then( response => {
    callback(response.data);
  });
}

export default ZumuniyoAxios;