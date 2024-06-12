import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 여기서 API 호출 등을 통해 댓글 데이터를 가져옴
    setComments([
      { id: 1, content: '첫 번째 댓글' },
      { id: 2, content: '두 번째 댓글' },
    ]);
  }, [postId]);

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;