import React, {useState} from "react";
import * as FarIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'LDS',
        path: '/LDS',
        icon: <FarIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Home',
    //     path: '/',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: '리뷰조회1',
    //     path: '/reports',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: '리뷰작성',
    //     path: '/products',
    //     icon: <FarIcons.FaCartPlus />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: '일반회원 전용',
    //     path: '/team',
    //     icon: <IoIcons.IoMdPeople />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'LDS',
    //     path: '/lds',
    //     icon: <FarIcons.FaEnvelopeOpenText />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Review',
    //     path: '/lds/review1',
    //     icon: <IoIcons.IoMdHelpCircle />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <FarIcons.FaEnvelopeOpenText />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: <IoIcons.IoMdHelpCircle />,
    //     cName: 'nav-text'
    // }
]