import React from 'react';
import { Link } from 'react-router-dom';

import SearchStudy from './SearchStudy';
import PopularStudies from './PopularStudies';
import StudyList from './StudyList';
import SearchScheduleStudy from './SearchScheduleStudy';
import './Study.css';

const EntireStudy=()=>{
    const username="user";
    
    return(
        <div className='entire-board-page'>
            <div className='title'>모임 찾기</div>
            <SearchStudy></SearchStudy>
            <div className='search-explain'>당신에게 맞는 모임을 찾아드릴게요!</div>
            <PopularStudies username={username}></PopularStudies>
            <Link to='/makestudy'>
                <button type="button" className="make-study-button right">+ 새 모임 만들기 </button>
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <SearchScheduleStudy></SearchScheduleStudy>
            <StudyList></StudyList>
        </div>
    )
}

export default EntireStudy;