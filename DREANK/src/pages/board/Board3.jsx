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
      <div className="board-writing">삼성 최종 합격했습니다.</div>
      <div className="board-writing">2주만에 토익 300점에서 700점된 썰</div>
      <div className="board-writing">자소서 첨삭해드림~~</div>
      <div className="board-writing">독학으로 ncs 합격</div>
      <div className="board-writing">면접 안 떠는 꿀팁</div>
      <Link to={pagelink}>
        <button type="button" className="detail-button">
          더보기
        </button>
      </Link>
    </div>
  );
};
export default Board;
