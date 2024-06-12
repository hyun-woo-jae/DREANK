
import PopularBoard from './PopularBoard';
import CategoryBoard from './CategoryBoard';

import './Board.css'
const EntireBoard=()=>{
    return(
        <div className='entire-board-page'>
            <div className='title'>전체 게시판</div>
            <PopularBoard></PopularBoard>
            <h3>주차별 카테고리</h3>
            <CategoryBoard></CategoryBoard>
        </div>
    )
}

export default EntireBoard;