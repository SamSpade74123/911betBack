import React from 'react';
import { HashRouter,Route,Routes } from "react-router-dom";


import Offline from './memberPages/offline';
import SubAccountList from './memberPages/subAccountList';
import Operationrecord from './memberPages/operationrecord';
import Loginhistory from './memberPages/loginhistory';
import InboxLog from './memberPages/inboxLog';

const MemberPage = () => {
    return (
        <>
            <section className='col-span-10'>
                <Routes>
                    <Route path="/Offlinelist" element={<Offline/>} />
                    <Route path="/Sub-accountlist" element={<SubAccountList/>} />
                    <Route path="/operationrecord" element={<Operationrecord/>} />
                    <Route path="/loginhistory" element={<Loginhistory/>} />
                    <Route path="/inboxlog" element={<InboxLog/>} />
                </Routes>
            </section>
        </>
    );
}

export default MemberPage;
