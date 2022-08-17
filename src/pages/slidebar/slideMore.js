import React,{useState} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const Main = styled.div`
    >ul>a>li:nth-child(1){
        margin-top:1rem;
    }
`
const SlideMore = ({Items,select,key}) => {
    return (
        <>
        <Main className='w-full bg-gradient-to-r from-sky-800 to-sky-900 relative -top-6 rounded-b-3xl pt-2 pb-2 '>
            <motion.ul
             initial={{height:"0px"}}
             animate={{height:"auto"}}
             transition={{duration:.2}}
             >
                {Items.map((item,key)=>{
                    return(
                        <Link to={`${item.link}`} key={key}>
                            <li className='mb-2 flex items-center cursor-pointer hover:bg-sky-700 px-3 py-1'>
                                <div className='text-white text-base mr-1 w-16'>&nbsp;</div>
                                <p className='pl-2 text-sm border-l text-white flex justify-between items-center w-72 text-xs'>
                                    {item.title}
                                </p>
                            </li>
                        </Link>
                    )
                })}
            </motion.ul>
        </Main>
        </>
    );
}

export default SlideMore;
