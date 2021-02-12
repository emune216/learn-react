import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });

  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열 입니다.

  return (
    <div>
      <h1>Itroduce</h1>
      <p>this project is example project for practice basic react router.</p>
      {showDetail && <p>detail 값을 true로 설정하셧군요!</p>}
    </div>
  );
};

export default About;
