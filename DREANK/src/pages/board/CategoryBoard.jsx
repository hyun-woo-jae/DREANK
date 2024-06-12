import './Board.css';
import Board from './Board';
const CategoryBoard=()=>{
    return(
        <>
            <Board pagelink='board-detail'position='board left' title='전체 게시판' explain='전체 페이지입니다'></Board>
            <Board position='board' title='스터디 모집' explain='스터디를 홍보하세요'></Board>
            <Board position='board right' title='자유 게시판' explain='자유 게시판입니다'></Board>
        </>
    )
}
export default CategoryBoard;