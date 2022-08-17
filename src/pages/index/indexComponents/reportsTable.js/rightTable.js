import React from 'react';

const RightTable = () => {
    return (
        <div className='w-full'>
        <p className='pl-2 py-1 bg-gradient-to-b from-gray-50 to-gray-300 rounded-t-xl'>下线数量</p>
        <table className='table-auto border-collapse w-full '>
            <tbody>
                <tr className='border-b-2 border-dotted'>
                    <td colSpan={4}>Total SSMA</td>
                    <td>5</td>
                </tr>
            </tbody>
        </table>
    </div>

    );
}

export default RightTable;