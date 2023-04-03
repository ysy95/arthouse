import React,{useRef,useState} from 'react';
import{Swiper,SwiperSlide} from 'swiper/react';//필수 
import {Pagination,Navigation,Scrollbar, Autoplay} from 'swiper';

import 'swiper/css';//필수
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Create from './Create';
import './css/movie.css';
import Movie from './Movie';
import moviedummy from './data/movie.json';


function MovieList(){
  // const [movies,setMovie] = useState([]);
  // const nextId = useRef(2);//특정 dom을 선택하기위해 사용. 상태관리에 담아줌


  const[movies, setMovie] = useState(moviedummy.movies);

  const nextId = useRef(13);//2번 방법일때

  //create의 참조 
  const iRef = useRef(null);
  const proRef = useRef(null);
  const priRef = useRef(null);

  //입력상자에서 사용할 값을 state로 관리한다.
  const [inputs1, setInputs1] = useState({ //상태값 관리위해 state
    img_name:'',
    m_name:'',
    date:''
  });

  //비구조화 할당 방식으로 state값 각각 변수에 담아주기
  const {img_name,m_name,date} = inputs1;

  //onDataChange함수 작성하기
  const onDataChange1 =(e)=>{
    const{name, value} = e.target;
    //state값 변경
    setInputs1({
      //변경되는 것 외에 나머지 속성값을 의미하는 나머지 패턴 (...은 기존 배열 건들지말고 추가하라는 의미)
      ...inputs1,
      [name] : value //내부에서 밖의 변수를 속성명으로 사용시 [변수명] (name에 해당하는 이름 배열에 담아줌)
    });
  };


  //추가 버튼 크릭시 기존 배열 뒤에 새로운 배열데이터를 추가하는 함수 
  const onCreate=()=>{
    // for(let i in inputs1){
      if(img_name === ''){
        alert('정보를 입력해주세요');
        iRef.current.focus();
        return;
      }if(m_name ===''){
        alert('상품명을 입력해주세요.');
        proRef.current.focus();
        return;
      }
      if(date===''){
        alert('날짜를 입력해주세요.');
        priRef.current.focus();
        return;
      }

        const movie = {
          id:'m'+nextId.current,//id의 현재값
          img_name,
          m_name,
          date
          //번에대한 데이터의 값 current라고 했으니. 
        };
        setMovie([...movies,movie]);//기존배열에 새로운걸 추가.

        setInputs1({
          img_name:'',
          m_name:'',
          date:''
        });
        nextId.current+=1;
      }
      
    

  //배열데이터 삭제하기  onRemove
  const onRemove =id=>{ //id값을 써줌(key값)
    setMovie(movies.filter(movie=>movie.id!==id))//삭제 버튼 누른것만 삭제되어야함. id같지않은것만 새롭게 배열 만들겠다.
  };



  //-------------------------------------------
  //배열데이터 변경을 위한 state 값 관리
  const [inputs2, setInputs2] = useState({
    img_name:'',
    m_name:'',
    date:''
  });

  //데이터 변경을 위한 변경함수
  const onDataChange2 =(e)=>{
    const{name,value} = e.target;

    setInputs2({
      ...inputs2,//변경되는 것 외의 나머지 속성값을 의미하는 나머지 패턴을 의미
      [name]:value//내부에서 밖의 변수를 속성명으로 사용시 [변수명]
    });
  };



  //변경관련 state함수 
  //updateProduct컴포넌트에서 [변경완료]를 누르면 처리될 클릭 이벤트에 줄 함수
  const onCompleteClick=(id)=>{//함수의 매개변수로id 담아줌 key값을 식별하기 위함
    const movie = { //movie라는 배열 객체를 만들어서 폼에서 입력한 데이터를 저장
      id:id,
      img_name:inputs2.img_name,
      m_name:inputs2.m_name,
      date:inputs2.date
    };

    setMovie(//위에서 입력한 배열데이터를 변경하기 위함
      movies
      .filter((movie)=>movie.id!==id) //기존 아이디와 같은 배열데이터 삭제
      .concat(movie)
      .sort((a,b)=>{
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
      })
    );

    setInputs2({ //위에서 배열데이터 값이 입력이 끝나면 상태값은 모두 초기화한다.
      img_name:'',
      m_name:'',
      date:''
    });
  };
  return (
    <>  
    <Swiper
      modules={[Navigation,Pagination,Scrollbar,Autoplay]}
      spaceBetween={50}
      slidesPerView={1} 
      navigation
      autoplay={{delay:2000}}
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
    className="notice">
      <SwiperSlide className='slide'>공지사항 1</SwiperSlide>
      <SwiperSlide className='slide'>공지사항 2</SwiperSlide>
      <SwiperSlide className='slide'>공지사항 3</SwiperSlide>
      <SwiperSlide className='slide'>공지사항 4</SwiperSlide>
      <SwiperSlide className='slide'>공지사항 5</SwiperSlide>
    </Swiper>
    {/* 자식 컴포넌트에게 전달해주기 위해서 작성함. */}
      <Create onDataChange={onDataChange1} img_name={img_name} m_name={m_name} date={date} onCreate={onCreate}/>

{/* 1번 방법 */}
      {/* <ul>
      {moviedummy.movies.map((movie,index)=>(
        <Movie 
          movie={movie} 
          key={movie.id} 
          onRemove={onRemove}
          onDataChange={onDataChange2} 
          onCompleteClick={onCompleteClick}
          />)
        )}
      </ul> */}

      {/* 2번방법 */}
      
      
      <ul>
      {movies.map((movie=>
        <Movie 
          movie={movie} 
          key={movie.id} 
          onRemove={onRemove} 
          onDataChange={onDataChange2} 
          onCompleteClick={onCompleteClick}/>
          ))} 
      </ul>    
      
    </>
  );
}

export default MovieList;