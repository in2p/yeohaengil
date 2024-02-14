import axios from 'axios';
import { useState, useEffect, useSelector, useRef } from 'react';

function useOAuth() {
  const [jwtToken, setJwtToken] = useState(null);
  const called = useRef(false); // prevent rerender caused by StrictMode

  const exchangeToken = async authorizationCode => {
    if (called.current) return;
    called.current = true;

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/api/auth/kakao`,
      withCredentials: false,
      data: { authorizationCode },
    })
      .then(response => {
        console.log(response);
        setJwtToken(response.accessToken);
      })
      .catch(error => {
        console.error('Error exchanging authorizationCode for token:', error);
        setJwtToken(undefined);
      });
  };

  useEffect(() => {
    const { search } = window.location;
    const urlParams = new URLSearchParams(search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      exchangeToken(authorizationCode);
    }
  });

  return jwtToken;
}
export default useOAuth;
