// import React,
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
// import CommentList from "./CommentList";
=======
>>>>>>> 285b402a42321783900fed5cf9745d34b7bffec6

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 여기서 API 호출 등을 통해 게시물 상세 데이터를 가져옴
    setPost({ id, title: "게시물 제목", content: "게시물 내용" });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="PostDetail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
