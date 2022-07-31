
import React ,{ useState, useEffect, useRef, useMemo } from "react";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios';
import { Route, Routes } from "react-router-dom";
import UserListTest from "components/menu/menuTest/UserList";
import CreateUserTest from "components/menu/menuTest/CreateUserTest";


function countActiveUsers(users){
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
}


const MenuListTest = ()=> {

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
      });
      const { username, email } = inputs;
      const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };
      const [users, setUsers ] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        }
      ]);
    
      const nextId = useRef(4);
      const onCreate = () => {
        const user = {
            id : nextId.current,
            username,
            email
        }
        setUsers([...users, user]);
    
        setInputs({
          username: '',
          email: ''
        });
        nextId.current += 1;
      };
      const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
      };
      const onToggle = id => {
        setUsers(
            users.map(user => 
                user.id === id ? { ...user, active: !user.active } : user)
        );
      };
      const count = useMemo(() => countActiveUsers(users), [users]); 


    const [mainheartbeat,setMainheartbeat] = useState('');
    const [menuheartbeat,setMenuheartbeat] = useState('');
    const [menuListTest,setMenuList] = useState('');
    

    const menuListTestDisplay = 
        <>
        <h2>메인생존여부: {mainheartbeat}</h2>
        <h2>메뉴생존여부: {menuheartbeat}</h2>
        
        <h1>메뉴리스트</h1>
        
        {menuListTest} 
        <hr></hr>
        <br></br>
        
        </>;
    


    useEffect(
        ()=> {
            ZumuniyoAxios('/main/heartbeat','get', data => {setMainheartbeat(data);});
            ZumuniyoAxios('/menu/heartbeat','get', data => {setMenuheartbeat(data);});
            ZumuniyoAxios('/menu/menulist/4882','get', data => {setMenuList(JSON.stringify(data));});
            
        }, []
    );

    return (
        <>

        <Routes>
          <Route path="/" element={menuListTestDisplay} />
          
          <Route path="*" element={<><h1>주소값 이상</h1></>} />
        </Routes>
        
        
        <Routes>
          <Route path="/" element={<UserListTest 
          users={users} onRemove={onRemove} onToggle={onToggle}
          />} />
        </Routes>  

        <Routes>
            <Route path="/" element={<div>활성사용자 수: {count}</div>} />
        </Routes>



        <Routes>
          <Route path="/" element={<CreateUserTest 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
          />} />
        </Routes>


        </>

    );

} 

export default MenuListTest;


