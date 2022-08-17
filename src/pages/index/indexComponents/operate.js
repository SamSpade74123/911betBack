import React from 'react';

import {AiFillLock} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {BsFillShieldFill} from 'react-icons/bs'

const Items = [
    {
        icon:<AiFillLock/>,
        title:"重设密码",
        link:""
    },
    {
        icon:<AiFillLock/>,
        title:"重设安全码",
        link:""
    },
    {
        icon:<BsFillShieldFill/>,
        title:"启用2FA設定",
        link:""
    },
    {
        icon:<AiFillMail/>,
        title:"站內信",
        link:""
    },
]

const Operate = () => {
    return (
        <>
        {Items.map((item,key)=>{
            return(

                <button className='flex flex-col items-center bg-orange-400 rounded-xl py-6 border-orange-900 hover:bg-orange-500' key={key}>
                    {item.icon}
                    <p>{item.title}</p>
                </button>
            )
        })}
        </>
    );
}

export default Operate;
