import "./Board.css";

const PopularBoard = () => {
  return (
    <div className="popular-board">
      {/* <div className="popular-board-title">🔥 HOT 게시판 🔥</div> */}
      <ul className="writing-lists">
        <li className="writing-list">삼성 최종 합격 후기 공유해요ㅎㅎ</li>
        <li className="writing-list">네이버 서합했습니다!</li>
        <li className="writing-list">코테 공부 개꿀팁</li>
        <li className="writing-list">
          2주 단기 토익 900점 필승법 알려드립니다
        </li>
        <li className="writing-list">오픽 꿀팁 공유해요</li>
      </ul>
    </div>
  );
};
export default PopularBoard;
