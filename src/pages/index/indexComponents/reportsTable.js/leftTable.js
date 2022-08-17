import React from 'react';

const LeftTable = () => {
    return (
        <div className='w-full'>
            <p className='pl-2 py-1 bg-gradient-to-b from-gray-50 to-gray-300 rounded-t-xl'>信息</p>
            <table className='table-auto border-collapse w-full '>
                <thead>
                    <tr>
                        <th colSpan={2} className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>今天</th>
                        <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>昨天</th>
                        <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>这周</th>
                        <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>上周</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-2 border-dotted'>
                        <td>有效投注额</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default LeftTable;
