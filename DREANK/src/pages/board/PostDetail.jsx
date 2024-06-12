// import React,
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
// import CommentList from "./CommentList";
<<<<<<< Updated upstream
=======
>>>>>>> 285b402a42321783900fed5cf9745d34b7bffec6
=======
>>>>>>> Stashed changes
>>>>>>> 32655570ac9941b4fbb3591784845db1508a433f

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
<<<<<<< Update d upstream
=======
      {/* <CommentList postId={id} /> */}
>>>>>>> Stashed changes
    </div>
  );
}

export default PostDetail;
