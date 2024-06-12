import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import SearchStudy2 from './SearchStudy2';
import StudyList from './StudyList';
import './SearchStudy.css';
import instance from '../../shared/Request';

const daysOptions = [
  { value: 'MON', label: '월요일' },
  { value: 'TUE', label: '화요일' },
  { value: 'WED', label: '수요일' },
  { value: 'THU', label: '목요일' },
  { value: 'FRI', label: '금요일' },
  { value: 'SAT', label: '토요일' },
  { value: 'SUN', label: '일요일' },
];

const SearchScheduleDetail = () => {
  const [tagContent, setTagContent] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [preferredStartTime, setPreferredStartTime] = useState('00:00');
  const [preferredEndTime, setPreferredEndTime] = useState('23:30');
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
        preferredDay: preferredDay.value,
        preferredStartTime: `${preferredStartTime}:00`,
        preferredEndTime: `${preferredEndTime}:00`
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
    <div className='entire-study-page'>
      <div className='title'>일정으로 모임 찾기</div>
      <div className='search-container'>
        <input
          type="text"
          placeholder="태그를 입력하세요"
          value={tagContent}
          onChange={(e) => setTagContent(e.target.value)}
          className="input-tag"
        />
        <Select
          options={daysOptions}
          placeholder="요일을 선택하세요"
          value={preferredDay}
          onChange={(option) => setPreferredDay(option)}
          className="input-select"
        />
        <TimePicker
          onChange={setPreferredStartTime}
          value={preferredStartTime}
          disableClock={true}
          className="input-time-picker"
        />
        <TimePicker
          onChange={setPreferredEndTime}
          value={preferredEndTime}
          disableClock={true}
          className="input-time-picker"
        />
        <button onClick={handleSearch} className="search-button">검색</button>
      </div>
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
