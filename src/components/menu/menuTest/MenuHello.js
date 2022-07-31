
import React, {useState} from "react";
import Wrapper from "./Wrapper";



function MenuHello({name, color, isSpecial}){
    
    const [result, setResult] = useState(name);
    const onClick = ()=> {
        setResult('정영훈');
    };

    return (
    <>
    <Wrapper>
    <div onClick={onClick} style={{color: color}}> 
    { isSpecial && <b>***</b> }
        반갑습니다~  {result} 입니다~ 
    </div>
    </Wrapper>
    </>
    );
}

MenuHello.defaultProps = {
    name: 'Anonymous'
}



export default MenuHello;






