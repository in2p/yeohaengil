import { useState, useEffect, useSelector } from 'react';
import axios from 'axios';

function useOAuth() {
  const [jwtToken, setJwtToken] = useState(null);
  // const called = useRef(false); // prevent rerender caused by StrictMode
  const exchangeToken = async (code, provider) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code, provider }),
        },
      ).then(data => data.json());
      setJwtToken(response.data);
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      setJwtToken(null);
    }
  };

  useEffect(() => {
    const { search, pathname } = window.location;
    const urlParams = new URLSearchParams(search);
    const code = urlParams.get('code');
    const segments = pathname.split('/');
    const provider = segments[segments.length - 1];

    if (code && provider) {
      exchangeToken(code, provider);
    }
  }, []);

  return jwtToken;
}
export default useOAuth;
