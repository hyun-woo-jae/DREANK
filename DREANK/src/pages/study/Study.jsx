//import React from 'react';
import PropTypes from "prop-types";
import "./Study.css";

const Study = ({ post }) => {
  return (
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
    </div>
  );
};

Study.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    num_recruit: PropTypes.number.isRequired,
    start_time: PropTypes.string.isRequired, // Assuming LocalTime is converted to string
    end_time: PropTypes.string.isRequired, // Assuming LocalTime is converted to string
    day: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Study;
