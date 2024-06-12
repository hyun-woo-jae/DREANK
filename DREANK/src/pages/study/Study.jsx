import React from 'react';
import PropTypes from 'prop-types';
import './Study.css';

const Study = ({ post }) => {
  return (
    <div className='study-item'>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      {/* 추가 정보가 필요한 경우 여기에 추가 */}
    </div>
  );
};

Study.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Study;
