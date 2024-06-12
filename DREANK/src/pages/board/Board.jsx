import React from 'react';
import { Link } from 'react-router-dom';
import './Board.css';
import EntireBoardDetail from './EntireBoardDetail';

const Board=({ pagelink, position, title, explain })=>{
    return(
        <div className={position}>
            <div className='board-title'>{title}</div>
            <div className='board-ex'>{explain}</div>
            <br/>
            <div className='board-writing'>글1</div>
            <div className='board-writing'>글2</div>
            <div className='board-writing'>글3</div>
            <div className='board-writing'>글4</div>
            <div className='board-writing'>글5</div>
            <Link to={pagelink}>
                <button type="button" className="detail-button">더보기</button>
            </Link>
        </div>
    )
}
export default Board;