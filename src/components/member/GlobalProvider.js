import React,{  useState,createContext } from "react";
import axios from 'axios'

const GlobalContext = createContext();

const GlobalProvider = (props)=> {

    const [logined,setLogined] = useState(false);
    const [memNick,setMemNick] = useState('');
    const [memType,setMemType] = useState('');
    const [axiosCounter,setAxiosCounter] = useState(0);
    const plusAxiosCounter = () => {setAxiosCounter(axiosCounter+1);};
    const minusAxiosCounter = () => {setAxiosCounter(axiosCounter-1);};

    const globalAxios =   (url, method,params, callback) =>  {
    
      const data = new URLSearchParams();

      for(let key in params){
        data.append(key,params[key]);
      };

      axios.interceptors.request.use(function (config) {
        plusAxiosCounter();
        return config;
      }, function (error) {
        console.log(error);
      });

      axios.interceptors.response.use(function (config) {
        minusAxiosCounter();
        return config;
      }, function (error) { 
        console.log(error);
      });

      axios(
        {
          url: url,
          method: method,
          data:data
        }
      ).then( response => {
          callback(response.data);
      }).catch(e=>{
        console.log(e);
      });
    } ;

    return (
      <>
        <GlobalContext.Provider value={{logined,setLogined,
                                        memNick,setMemNick,
                                        memType,setMemType,
                                        axiosCounter,
                                        globalAxios}}>
            {props.children}
        </GlobalContext.Provider>
      </>
    );
  }
  export {GlobalProvider,GlobalContext};