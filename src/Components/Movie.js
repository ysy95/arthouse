import React,{useState} from 'react';
import UpdateProduct from './UpdateMovie';


function Movie({movie, onRemove, onCompleteClick, onDataChange}) {
  let [cnt, setCnt] = useState(0);//상태관리 값을 0 으로 초기화 
  // 초기화 => 0 일떄 updteProduct가 안보이게 하기 위해서 

  // 변경버튼 누면 state값에 1을 넣어서 updateProduct가 뵝게 한다.
  const onUpdateClick=()=>{
    if(cnt===0){
      setCnt(1);
    }
  };

  return (

    <>
    <ul className='contents'>
      <li>
        <img src={`${process.env.PUBLIC_URL}/img/${movie.img_name}`} alt="영화이미지" className='img'/>
      </li>
      <li><p><strong>영화명 : </strong> {movie.m_name}</p></li>
      <li><p><strong>개봉일 : </strong> {movie.date}</p></li>
      <li>
        <p>
          <button className='btn' onClick={onUpdateClick}>변경</button>
          <button className='btn' onClick={()=>onRemove(movie.id)}>삭제</button>
          
         </p> 
         {cnt===1 && <UpdateProduct
            movie={movie}
            onDataChange={onDataChange}
            onCompleteClick={onCompleteClick}
            setCnt={setCnt}
            />}
      </li>
      </ul>
    </>
  );
}

export default Movie;