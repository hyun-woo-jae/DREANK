import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchStudy2 from './SearchStudy2';
import StudyList from './StudyList';
import './SearchStudy.css';
import instance from '../../shared/Request';

const SearchScheduleDetail = () => {
  const [tagContent, setTagContent] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [preferredStartTime, setPreferredStartTime] = useState('');
  const [preferredEndTime, setPreferredEndTime] = useState('');
  const [studies, setStudies] = useState([]);
  const [filteredStudies, setFilteredStudies] = useState([]);
  const [titleText, setTitleText] = useState('내 일정에 맞는 모임');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchInitialStudies = async () => {
      try {
        const response = await instance.get(`/user/${localStorage.getItem('user_id')}/calendar/searchGroupUsingCalendar`);
        if (response.status === 200) {
          setStudies(response.data);
          setFilteredStudies(response.data); // 초기 데이터로 필터링된 목록도 설정
        }
      } catch (error) {
        console.log(error);
        setErrorMessage('데이터 전송에 실패하였습니다!');
      }
    };

    fetchInitialStudies();
  }, []);

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams({
        tagContent,
        preferredDay,
        preferredStartTime,
        preferredEndTime
      });

      const url = `/user/${localStorage.getItem('user_id')}/calendar/filterByTagAndTime?${params.toString()}`;
      console.log('Request URL:', url);

      const response = await instance.get(url);
      console.log(response);
      if (response.status === 200) {
        setStudies(response.data);
        setTitleText('검색결과');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('데이터 전송에 실패하였습니다!');
    }
  };

  return (
    <div className='entire-board-page'>
      <div className='title'>일정으로 모임 찾기</div>
      <SearchStudy2
        setTagContent={setTagContent}
        setPreferredDay={setPreferredDay}
        setPreferredStartTime={setPreferredStartTime}
        setPreferredEndTime={setPreferredEndTime}
        onSearch={handleSearch}
      />
      <div className="study-title2">{titleText}</div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <StudyList studies={filteredStudies} />
      <Link to='/makestudy'>
        <button type="button" className="make-study-button right">+ 새 모임 만들기</button>
      </Link>
    </div>
  );
};

export default SearchScheduleDetail;
