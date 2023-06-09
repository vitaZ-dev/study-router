import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
  // 페이지이동 Hook
  const navigate = useNavigate();
  const { id } = useParams();
  // id와 같은 1개의 객체를 songs 에서 추출
  // 화면 갱신
  // 화면 갱신을 위해 state를 활용해야 함
  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  // 컴포넌트 마운트 되기 전에 (한번만) 처리한다
  // 데이터 로딩 및 처리
  useEffect(() => {
    // id 를 이용해서 데이터에서 검색한 결과를 출력한다
    // array.find : 조건이 true 인 요소를 리턴함
    // array.find : 여러개가 true 일 때 처음 true 만 리턴함
    // URL Parameter 는 무조건 문자열이다. 그래서 숫자로 변경함
    const song = songs.find((item) => item.id === parseInt(id));
    // 검색이 되지 않을 경우를 위한 처리
    if (song) {
      setTitle(song.title);
      setMusician(song.musician);
      setLink(`https://m.youtube.com/watch?v=${song.youtube_link}`);
    } else {
      alert("자료가 없습니다");
      navigate("/songs");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        {/* 유튜브 보여주기 */}
        <a href={link} target="_blank" rel="noreferrer">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return to SongList</Link>
    </div>
  );
};

export default SongDetail;
