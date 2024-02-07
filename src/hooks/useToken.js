import { useState } from 'react';

function useToken() {
  // localStorage 에서 token 을 가져온다.
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token; // userToken is {"token": ..., "expires": ...}
  };
  // 해당 component 가 재 랜더링 될때마다 localStorage 에서 token 을 가져온다.
  const [token, setToken] = useState(getToken());

  // userToken 을 localStorage 에 저장하고 token state 에 저장한다.
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
export default useToken;
