import React from 'react';
import { HashRouter,Route,Routes } from "react-router-dom";

import Membernormal from './managePage/membernormal';


const MemberManagePages = () => {
    return (
        <>
        <section className='col-span-10'>
            <Routes>
                <Route path="/membernormal" element={<Membernormal/>} />
            </Routes>
        </section>
        </>
    );
}

export default MemberManagePages;
