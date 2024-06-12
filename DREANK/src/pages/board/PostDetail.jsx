import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 여기서 API 호출 등을 통해 게시물 상세 데이터를 가져옴
    setPost({ id, title: '게시물 제목', content: '게시물 내용' });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="PostDetail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <CommentList postId={id} />
    </div>
  );
}

export default PostDetail;