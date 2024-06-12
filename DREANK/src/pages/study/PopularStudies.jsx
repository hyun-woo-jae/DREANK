import React from 'react';

import './Study.css';

import PopularStudy from './PopularStudy';
const PopularStudies=({ username })=>{
    return(
        <>
            <div className='hot-study-title'>🔥 이번주 HOT 모임🔥</div>
            <PopularStudy position='study left' title='코테 대비 함께해요' explain='네카라쿠배당토 가보자구' username={username}></PopularStudy>
            <PopularStudy position='study' title='오픽 AL 스터디' explain='오픽 AL 가보자구' username={username}></PopularStudy>
            <PopularStudy position='study right' title='스펙 같이 채워요' explain='ㄱㄱ' username={username}></PopularStudy>
        </>
    )
}
export default PopularStudies;