//import React from 'react';
import PropTypes from "prop-types";
import "./Study.css";

const Study = ({ post }) => {
  return (
<<<<<<< HEAD
    <div className="study-item">
      <h3>{post.name}</h3>
      <p>{post.introduction}</p>
      <p>
        <strong>Number of Recruits:</strong> {post.num_recruit}
      </p>
      <p>
        <strong>Start Time:</strong> {post.start_time}
      </p>
      <p>
        <strong>End Time:</strong> {post.end_time}
      </p>
      <p>
        <strong>Day:</strong> {post.day}
      </p>
      <p>
        <strong>Tag:</strong> {post.tag}
      </p>
=======
    <div className='study-container'>
      <div className='study-title'>{post.name}</div>
      <div className='study-info'>{post.introduction}</div>
      <div className='study-info'>모집 인원: {post.num_recruit}</div>
      <div className='study-info'>시작 시간: {post.start_time}</div>
      <div className='study-info'>종료 시간: {post.end_time}</div>
      <div className='study-info'>요일: {post.day}</div>
      <div className='study-info'>태그: {post.tag}</div>
>>>>>>> 75a4e348de9da9d9146cc3cfc086b9baa3c4686a
    </div>
  );
};

Study.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    num_recruit: PropTypes.number.isRequired,
<<<<<<< HEAD
    start_time: PropTypes.string.isRequired, // Assuming LocalTime is converted to string
    end_time: PropTypes.string.isRequired, // Assuming LocalTime is converted to string
=======
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
>>>>>>> 75a4e348de9da9d9146cc3cfc086b9baa3c4686a
    day: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Study;
