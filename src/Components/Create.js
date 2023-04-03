import React from 'react';

function Create({img_name,m_name,date, onDataChange, onCreate}) {


  return (
    <>
    <div>
      <h3 className='title01'>CGV 아트하우스 영화 등록, 삭제, 목록 출력하기</h3>
      <dl className='movie_input'>
          <dt>영화 이미지</dt>
        <dd><input name='img_name' type="text"placeholder="파일명" value={img_name} onChange={onDataChange}/></dd>
        
          <dt>영화명</dt>
          <dd><input name="m_name"type="text" placeholder="영화명" value={m_name} onChange={onDataChange}/></dd>
        
          <dt>개봉일</dt>
          <dd><input type="date" name="date" value={date} onChange={onDataChange}/></dd>
          <dd><button className='add' onClick={onCreate}>내용 추가하기</button></dd>
      </dl>
      </div>
    </>
  );
}

export default Create;