import React from 'react';


const navItems = [
    {
        title:"基本資料",
    },
    {
        title:"財務設定",
    },
    {
        title:"類別設定",
    },
    {
        title:"返水設定",
    },
    {
        title:"遊戲設定",
    },
    {
        title:"遊戲開關",
    },
    {
        title:"銀行設定",
    },
    {
        title:"各館輸贏",
    }
]

const SetNavbar = ({Tag}) => {
    console.log(Tag)
    return (
        <nav className='grid grid-cols-12 py-3 border-b mb-5'>
            {navItems.map((item,key)=>{
                return(
                    <div className={`flex items-center font-light cursor-pointer rounded hover:bg-gray-100 hover:text-blue-700 py-2 justify-center ${Tag.isTag.key == key ? "bg-gray-100 text-blue-700" : null}`} key={key} onClick={()=>Tag.setIsTag({key:key})}>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </nav>
    );
}

export default SetNavbar;
