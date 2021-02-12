import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>user list:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert" active>velopert</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">gildong</NavLink>
        </li>
      </ul>
      <Route
      path="/profiles"
      exact // JSX에서 props를 설정할때 값을 생략하면 자동으로 true로 설정됨 >> exact={true}
      render={() => <div>select user.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
