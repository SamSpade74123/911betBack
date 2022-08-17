import React from 'react';
import { HashRouter,Route,Routes } from "react-router-dom";

import Dailywin from './reportsPages/dailywin';

const ReportsPage = () => {
    return (
        <>
        <section className='col-span-10'>
            <Routes>
                <Route path="/dailywin" element={<Dailywin/>} />
            </Routes>
        </section>
        </>
    );
}

export default ReportsPage;
