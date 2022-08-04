import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import SocialLogin from "components/member/SocialLogin"
import LoginInfo from "components/member/LoginInfo";
import KakaoMap from "components/common/map/KakaoMap";
import AuthChecker from "components/common/auth/AuthChecker";
import OrderTest from "components/order/OrderTest";
import CRUDTest from "components/common/test/CRUDTest"

const MJH = ()=> {

    return (
      <>
        
       <Link to="/"><button>홈으로</button></Link>
       <Link to="logindata"><button>로그인정보보기</button></Link>
       <Link to="map"><button>카카오맵</button></Link>
       <Link to="auth1"><button>로그인만필요</button></Link>
       <Link to="auth2"><button>권한체크(일반회원)</button></Link>
       <Link to="auth3"><button>권한체크(사업자회원)</button></Link>
       <Link to="auth4"><button>권한체크(관리자)</button></Link>
       <Link to="ordertest"><button>주문테스트</button></Link>
       <Link to="crudtest"><button>crud 예시배포</button></Link>

        <hr/>
      
        <Routes>
          <Route path="/" element={<><h1>명준희 테스트 페이지</h1></>} />
          <Route path="/sociallogin/*" element={<SocialLogin/>} />
          <Route path="/logindata" element={<LoginInfo/>} />
          <Route path="/map" element={<KakaoMap/>} />
          <Route path="/auth1" element={<AuthChecker>로그인한사람볼수있는내용</AuthChecker>} />
          <Route path="/auth2" element={<AuthChecker memType="일반회원">일반회원만볼수있는내용</AuthChecker>} />
          <Route path="/auth3" element={<AuthChecker memType="사업자회원">사업자회원만볼수있는내용</AuthChecker>} />
          <Route path="/auth4" element={<AuthChecker memType="관리자">관리자만볼수있는내용</AuthChecker>} />
          <Route path="/ordertest" element={<OrderTest/>} />
          <Route path="/crudtest" element={<CRUDTest/>} />
          <Route path="*" element={<><h1>주소값 이상</h1></>} />
        </Routes>

      </>
    );
  }
  export default MJH;