import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {RiUser3Fill} from 'react-icons/ri'
import {RiUserAddFill} from 'react-icons/ri'
import {TbReportSearch} from 'react-icons/tb'
import {RiLogoutBoxRLine} from 'react-icons/ri'
import {RiFileCopyLine} from 'react-icons/ri'
import {RiUserSearchFill} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {BsCoin} from 'react-icons/bs'


import SlideMore from './slideMore';

const Main = styled.div`
    li{
        list-style:none;
    }

`

const slideBarList = [
    {
        logo:<RiUser3Fill className='text-white text-base mr-1 w-16'/>,
        title:"我的档案",
        hasDownArrow:false,
        link:"/",
    },
    {
        logo:<RiUserSearchFill className='text-white text-base mr-1 w-16'/>,
        title:"会员管理",
        hasDownArrow:true,
        moreItems:[
            {title:"会员普通管理",link:"/membermanage/membernormal"},
        ],
        link:"#",
    },
    {
        logo:<RiUserAddFill className='text-white text-base mr-1 w-16'/>,
        title:"会员资料",
        hasDownArrow:true,
        moreItems:[
            {title:"下线列表",link:"/memberdetail/Offlinelist"},
            {title:"子帐号列表",link:"/memberdetail/Sub-accountlist"},
            {title:"用户操作纪录",link:"/memberdetail/operationrecord"},
            {title:"登入纪录",link:"/memberdetail/loginhistory"},
            {title:"Inbox Log",link:"/memberdetail/inboxlog"},
        ],
        link:"#",
    },
    {
        logo:<BsCoin className='text-white text-base mr-1 w-16'/>,
        title:"金流管理",
        hasDownArrow:true,
        moreItems:[
            {title:"金流存款",link:"/cashflow/deposit"},
        ],
        link:"#",
    },
    {
        logo:<TbReportSearch className='text-white text-base mr-1 w-16'/>,
        title:"报表",
        hasDownArrow:true,
        moreItems:[
            {title:"每日输赢",link:"/reports/dailywin"},
            {title:"每日输赢(简易)",link:"/reports/dailywinEZ"},
            {title:"产品输赢",link:"/reports/Productwl"},
            {title:"现有注单",link:"/reports/Existingbet"},
            {title:"比赛结果",link:"/reports/MatchResults"},
            {title:"赛事输赢报表",link:"/reports/TournamentReport"},
            {title:"体育赛事报告",link:"/reports/sportsreport"},
            {title:"体育比赛结果",link:"/reports/sportsresults"},
            {title:"交易历史",link:"/reports/transactionhistory"},
            {title:"未结束交易",link:"/reports/opentransaction"},
        ],
        link:"#",
    },
    {
        logo:<RiLogoutBoxRLine className='text-white text-base mr-1 w-16'/>,
        title:"转帐",
        hasDownArrow:true,
        moreItems:[
            {title:"上下分",link:"transfer/points"},
        ],
        link:"#",
    },
    {
        logo:<RiFileCopyLine className='text-white text-base mr-1 w-16'/>,
        title:"总投注",
        hasDownArrow:true,
        moreItems:[
            {title:"简易 让球 & 大小",link:"totalbet/EasyHandicap&Size"},
            {title:"简易单双",link:"totalbet/SimpleSD"},
            {title:"独赢",link:"totalbet/winalone"},
            {title:"总进球",link:"totalbet/totalgoals"},
            {title:"全场 波胆",link:"totalbet/Fulltime"},
            {title:"半场 波胆",link:"totalbet/Halftime"},
            {title:"半场/全场",link:"totalbet/HalftimeFulltime"},
            {title:"最先进球 / 最后进球",link:"totalbet/FirstGoalLastGoal"},
            {title:"混合过关",link:"totalbet/mixedpass"},
            {title:"优胜冠军",link:"totalbet/champion"},
            {title:"未结束交易",link:"totalbet/opentransaction"},
        ],
        link:"#",
    },
]

const SlideBar = () => {

    const [select,setSelect] = useState('');
    return (
        <>
        <Main className='col-span-2 p-2'>
            <ul className='w-full'>
                {slideBarList.map((item,key)=>{
                    return(
                        <>
                        <Link to={item.link}>                                                                                                                                                                                               {/* select == '' ? key : '' */}
                            <li className='bg-gradient-to-r from-sky-700 to-sky-800 py-2 px-3 rounded-3xl flex items-center cursor-pointer transition duration-300 hover:to-sky-700 relative z-10' style={{marginBottom:"5px"}} key={key}  onClick={()=>setSelect(key)}>
                                {item.logo}
                                <div className='pl-2 text-sm border-l text-white flex justify-between items-center w-72'>
                                    {item.title}
                                    {item.hasDownArrow == true ? <MdKeyboardArrowDown className=''/> : null}
                                </div>
                            </li>
                            {item.hasDownArrow == true && select == key ? <SlideMore select={select} Items={item.moreItems} key={key} className=''/> : null}         
                        </Link>
                        </>
                        )
                })}
            </ul>
        </Main>
        </>
    );
}

export default SlideBar;
