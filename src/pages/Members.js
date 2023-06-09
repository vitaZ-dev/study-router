import React from "react";

/**
 * react component에서 이미지 소스 불러오는 법
 * 1. src : 각각의 이미지를 import 한 다음
 *          이미지 태그의 src 속성에 적용
 *        예) import gogo from './img/aaa.jpg'
 *           <img src={gogo} />
 *        : import 할 이미지가 많으면 안좋은 방법
 * 2. public 폴더 사용
 *    public 폴더 안쪽에 이미지를 배치
 *  2-1. process.env.PUBLIC_URL 구문 사용(추천) ~ public 폴더를 가리킴
 *  2-2. public 폴더 절대경로를 구해서 직접 출력
 */

const Members = ({ members }) => {
  const path = process.env.PUBLIC_URL;
  const imgStyle = {
    width: 90,
    height: 80,
  };
  const list = members.map((item, index) => {
    return (
      <div key={index} className="col-6 col-md-4 col-lg-3">
        <img
          src={`${path}/${item.photo}`}
          alt={item.name}
          className="img-thumbnail"
          style={imgStyle}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  // JSX
  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
