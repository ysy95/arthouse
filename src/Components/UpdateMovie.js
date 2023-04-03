import React from 'react';

//배열데이터를 수정하기 위한 컴포넌트 
function UpdateMovie({movie,onDataChange,onCompleteClick, setCnt}) {
  const onCntChange=()=>{ //변경 입력양식이 화면에 보이지 않게함.
    setCnt(0);//상태값을 0으로 설정하여 변경양식 화면에 숨김
  };
  return (
    <>
      <div>
      <h3 className='title01'>CGV 아트하우스 수정하기</h3>
      <dl className='input'>
          <dt>영화 이미지 : </dt>
        <dd>
          <input name='img_name' type="text"placeholder="파일명" onChange={onDataChange}/>
          </dd>
        
          <dt>영화명 : </dt>
          <dd><input name="m_name" type="text" placeholder="영화명" onChange={onDataChange}/></dd>
        
          <dt>개봉일 : </dt>
          <dd>
            <input type="date" name="date" />
          </dd>

          <dd><button className='btn' onClick={()=>{
            onCompleteClick(movie.id);
            onDataChange();
          }}>데이터 변경하기</button>
          <button onClick={()=>{
            onCntChange(0);}} className='btn'>취소하기</button>
          </dd>
      </dl>
      </div>
    </>
  );
}

export default UpdateMovie;