/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import "./Board.css";
import EntireBoardDetail from "./EntireBoardDetail";

const Board = ({ pagelink, position, title, explain }) => {
  return (
    <div className={position}>
      <div className="board-title">{title}</div>
      <div className="board-ex">{explain}</div>
      <br />
      <div className="board-writing">오늘 토익 어땠음?</div>
      <div className="board-writing">아 토익 망했다ㅠㅠ</div>
      <div className="board-writing">RC 하나 틀린거 같은데ㅠㅠ</div>
      <div className="board-writing">쉬운거에서 실수했다ㅜ흑</div>
      <div className="board-writing">흐아아ㅏ 피곤해</div>
      <Link to={pagelink}>
        <button type="button" className="detail-button">
          더보기
        </button>
      </Link>
    </div>
  );
};
export default Board;
