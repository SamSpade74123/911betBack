import React,{useState} from 'react';
import styled from 'styled-components';

import SetNavbar from './set_navbar';
import SetNormal from './set_normal';
import SetFinance from './set_finance';
import SetType from './set_type';
import SetRebate from './set_ rebate';
import SetGame from './set_game';
import SetOpenClose from './set_OpenClose';
import SetWinLose from './set_WinLose';

const Main = styled.div`
    label{
        width:160px;
    }
    button:hover{
    }
`

const MembernormalDetail = () => {

    const [isTag,setIsTag] = useState({
        title:"",
        key:"0"
    });
    const TagSetting = {isTag,setIsTag};

    return (
        <Main>
        <SetNavbar Tag={TagSetting}/>
        {isTag.key == 0 ? <SetNormal/> : null}
        {isTag.key == 1 ? <SetFinance/> : null}
        {isTag.key == 2 ? <SetType/> : null}
        {isTag.key == 3 ? <SetRebate/> : null}
        {isTag.key == 4 ? <SetGame/> : null}
        {isTag.key == 5 ? <SetOpenClose/> : null}
        {isTag.key == 7? <SetWinLose/> : null}
        </Main>
    );
}

export default MembernormalDetail;
