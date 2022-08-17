import React from 'react';
import { HashRouter,Route,Routes } from "react-router-dom";


import Deposit from './pages/deposit';


const CashManagePages = () => {
    return (
        <>
        <section className='col-span-10'>
            <Routes>
                <Route path="/deposit" element={<Deposit/>} />
            </Routes>
        </section>
        </>
    );
}

export default CashManagePages;
