import React from 'react'
import { useContext } from "react";
import {GlobalContext} from "components/common/GlobalProvider";

import AdminFloatingAction from '../components/AdminFloatingAction';

export default function Admin() {
  const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);



  return (
    <>
     

      
    </>
  )
}
