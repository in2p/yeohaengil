import { useState, useEffect, useSelector } from 'react';
import axios from 'axios';

function useOAuth() {
  const [jwtToken, setJwtToken] = useState(null);
  // const called = useRef(false); // prevent rerender caused by StrictMode
  const exchangeToken = async authorizationCode => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/kakao`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ authorizationCode }),
        },
      ).then(data => data.json());
      setJwtToken(response.accessToken);
    } catch (error) {
      console.error('Error exchanging authorizationCode for token:', error);
      setJwtToken(null);
    }
  };

  useEffect(() => {
    const { search } = window.location;
    const urlParams = new URLSearchParams(search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      exchangeToken(authorizationCode);
    }
  }, []);

  return jwtToken;
}
export default useOAuth;
