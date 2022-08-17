import React from 'react';
import styled from 'styled-components';
import bg from './../../images/navbar/header-BG.png'
import logo from './../../images/navbar/MWCASH_logo.png'
import {AiOutlineGlobal} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'

const Nav = styled.div`
    height:50px;
    background:url(${bg});
    >section>img{
        width:80px
    }
`

const Navbar = () => {
    return (
        <>
        <Nav className='w-screen fixed top-0 left-0 z-50'>
            <section className='container mx-auto h-full flex items-center justify-between'>

                <img src={logo} alt="logo"/>

                <div className='flex items-center'> {/* 右邊欄位 */}
                    <div className='flex items-center justify-between bg-white rounded-3xl p-2 mr-2'>
                        <div className='mr-3 py-1 px-2 bg-gray-600 text-white rounded-3xl font-light text-xs '> {/* 錢錢 */}
                            Balance
                        </div>
                        <p className='text-sm'>
                            100,000
                        </p>
                    </div>


                    <div className='flex items-center justify-between bg-white rounded-3xl py-2 pl-2 pr-4 mr-2' style={{height:"40px"}}> {/* 玩家名稱 */}
                        <div className='mr-1 py-1 bg-gray-600 text-white font-light rounded-3xl text-sm overflow-hidden'>
                            <span className='w-50 px-4 bg-lime-600 py-3 rounded-l-3xl text-xs'>
                                SH
                            </span>
                            <span className='w-50 px-4 text-xs'>
                                PHP
                            </span>
                        </div>
                        <p className='text-sm flex flex-col items-start'>
                            <span className=''>
                                mse99
                            </span>
                            <span className='text-xs text-gray-500'>
                                ID:mse
                            </span>
                        </p>
                    </div>

                    <div className='flex items-center justify-between bg-white rounded-3xl py-2 px-2 mr-2 text-gray-700 cursor-pointer'> {/* 語言選擇 */}
                        <AiOutlineGlobal className='text-xl mr-2'/>
                        <p className='text-sm flex items-center'>中文 <MdKeyboardArrowDown/></p>
                    </div>

                    <div className='flex items-center justify-between bg-white rounded-3xl py-2 px-2 mr-8 text-amber-800 cursor-pointer'> {/* 信件 */}
                        <AiOutlineMail className='font-black'/>
                    </div>

                    <button className='text-white py-1 px-8 bg-gradient-to-r from-gray-500 to-gray-700 rounded-3xl'> {/* 登出按鈕 */}
                        登出
                    </button>
                </div>
            </section>
        </Nav>
        </>
    );
}

export default Navbar;
