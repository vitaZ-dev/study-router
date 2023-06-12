import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const About = ({ title }) => {
  // 웹브라우저의 라우터를 변경하려면 useNavigate() 를 활용
  const navigate = useNavigate();
  // useSearchParams : ?a=1&b=2 쿼리문자열 활용하기
  // useLocation : ?a=1&b=2 쿼리문자열 활용하기
  // eslint-disable-next-line
  const location = useLocation();
  // console.log("주소창 객체", location.state);
  // console.log("주소창 객체 = pathname", location.pathname);
  // console.log("주소창 객체 = search", location.search);
  // console.log("주소창 객체 = hash", location.hash);

  // useLocation() === window.location 객체와 같다
  // useSearchParams() 를 이용하면 수월하게 쿼리를 추출할 수 있다
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("total"));

  // 현재 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 문자열을 숫자로 바꾸어줌
    const strPage = parseInt(searchParams.get("page"));
    // NaN !== NaN
    // isNaN(값) = 값이 NaN 인지 아닌지 검사
    // isNaN(값) 의 결과가 true 라면 값이 NaN 이라는 소리=숫자가 아님
    // isNaN(값) 의 결과가 false 라면 값이 숫자
    setPage(isNaN(strPage) ? 1 : strPage);
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      // 웹브라우저의 쿼리 스트링을 변경해보자
      // http://localhost:3000/about?page=1&total=5
      navigate(window.location.pathname + `?page=${page - 1}&total=5`);
    }
  };
  const goNext = () => { 
    navigate(window.location.pathname + `?page=${page + 1}&total=5`);
  };
  // const goNaver = () => {
    //   window.open("https://www.naver.com");
  //   // window.location = "https://www.naver.com";
  //   // 이렇게 전달하면 path 와 함께 붙는다
  //   // navigate("https://www.naver.com");
  // };
  // const goHome = () => {
  //   navigate("/", { state: { from: "/about", age: 20 } });
  // };

  return (
    <div className="card card-body">
      <h2>About {title} </h2>
      <div>
        <div className="m-2">현재 페이지 : {page} </div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default About;
