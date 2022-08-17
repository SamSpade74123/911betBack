import React from 'react';
import styled from 'styled-components';
import { HashRouter,Route,Routes } from "react-router-dom";

import SlideBar from '../slidebar/slideBar';
import MainPage from './mainPage';

import MemberManagePages from '../memberManage/memberManagePages';
import Membernormal from '../memberManage/managePage/membernormal';

import CashManagePages from '../cashManage/cashManagePages';

import MemberPage from '../member/memberPage';
import Offline from '../member/memberPages/offline';
import SubAccountList from '../member/memberPages/subAccountList';
import Operationrecord from '../member/memberPages/operationrecord';
import Loginhistory from '../member/memberPages/loginhistory';
import InboxLog from '../member/memberPages/inboxLog';

import ReportsPage from '../reports/reportsPage';
import Dailywin from '../reports/reportsPages/dailywin';


const Main = styled.div`
`


const MainIndex = () => {
    return (
        <>
        <Main className='w-screen grid grid-cols-12' style={{marginTop:"50px"}}>
            <HashRouter>
                <SlideBar/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/membermanage/" element={<MemberManagePages/>}>
                        <Route path="membernormal" element={<Membernormal/>}/>
                    </Route>
                    <Route path="/memberdetail/" element={<MemberPage/>}>
                        <Route path="Offlinelist" element={<Offline/>}/>
                        <Route path="Sub-accountlist" element={<SubAccountList/>}/>
                        <Route path="operationrecord" element={<Operationrecord/>}/>
                        <Route path="loginhistory" element={<Loginhistory/>}/>
                        <Route path="inboxlog" element={<InboxLog/>}/>
                    </Route>
                    <Route path="/cashflow/" element={<CashManagePages/>}>
                        <Route path="deposit" element={<Dailywin/>}/>
                    </Route>
                    <Route path="/reports/" element={<ReportsPage/>}>
                        <Route path="dailywin" element={<Dailywin/>}/>
                    </Route>

                </Routes>
            </HashRouter>

        </Main>
        </>
    );
}

export default MainIndex;
