import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Study from './Study';
import './Study.css';

const StudyList = ({ studies }) => {
  return (
    <div className='writing-lists2'>
      {studies.map(post => (
        <Link key={post.id} to={`/study/${post.id}`}>
          <Study post={post} />
        </Link>
      ))}
    </div>
  );
};

StudyList.propTypes = {
  studies: PropTypes.array.isRequired,
};

export default StudyList;
