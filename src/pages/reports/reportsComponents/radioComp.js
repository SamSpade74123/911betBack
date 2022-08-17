import React from 'react';
import {BiFootball} from 'react-icons/bi'

const RedioComp = ({list,icon}) => {
    return (
        <>
        <div className='flex items-center py-1'>
            {icon}

        {list.map((item,key)=>{
            return(
                    <div className='mr-2'>
                        <input type="radio" className='mr-1'/>
                        <span>{item.title}</span>
                    </div>
                 )
        })}
        </div>
        </>
    );
}

export default RedioComp;
