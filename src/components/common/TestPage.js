import React from "react";
import { Route, Routes ,Link } from "react-router-dom";
import NotFound from "./NotFound";
import MJH from "./TestUser/MJH"
import JYH from "./TestUser/JYH"
import LDS from "./TestUser/LDS"
import LJW from "./TestUser/LJW"
import SWY from "./TestUser/SWY"

const TestPage = ()=> {
  return (
    <Routes>
        <Route path="/MJH" element={<MJH/>} />
        <Route path="/JYH" element={<JYH />} />
        <Route path="/LDS" element={<LDS />} />
        <Route path="/LJW" element={<LJW />} />
        <Route path="/SWY" element={<SWY />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default TestPage;