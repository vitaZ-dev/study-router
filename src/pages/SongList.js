import React from "react";
import { Link, Outlet } from "react-router-dom";

const SongList = ({ songs }) => {
  // 사용법 : navigate(경로, 옵션)
  // const goHome = () => {
  //   // navigate 를 이용해서 정보를 전달하고 싶다.
  //   // state 옵션에 객체를 정의해서 전달해 준다.
  //   navigate("/", { state: { age: 19 } }); // from 속성이 없다
  // };

  const list = songs.map((item) => {
    // return () 는 JSX 로 html 만들려고 한다는 의도
    return (
      <li className="list-group-item" key={item.id}>
        <Link to={`/songs/${item.id}`} style={{ textDecoration: "none" }}>
          {item.title} {item.musician}
          {/* font-awsome */}
          <span className="float-end badge bg-danger">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
      {/* 중첩된 Route 표현  : context 활용*/}
      <Outlet context={{ songs }} />
    </div>
  );
};

export default SongList;
