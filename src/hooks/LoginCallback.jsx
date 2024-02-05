import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { setLoggedIn } from '../store.jsx';

function LoginCallback() {
  const navigate = useNavigate();
  const called = useRef(false); // prevent rerender caused by StrictMode

  const { pathname } = new URL(window.location.href);
  const code = pathname.searchParams.get('code');
  const segments = pathname.split('/');
  const provider = segments[segments.length - 1];

  const loggedIn = useSelector(state => state.loggedIn);
  // 인가코드 백으로 보내는 코드
  // 1. res 에 jwt token 담긴다.
  // 2. redux 의 loggedIn true 로 바뀐다.
  useEffect(() => {
    const socialLogin = async () => {
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          await axios
            .get(`${process.env.REACT_APP_SERVER_URL}/${provider}?code=${code}`)
            .then(res => {
              console.log(res);
              // 여기서부터 res 로 다시 jwt 통신하여 필요한 정보들 전부 저장 한다.
              setLoggedIn(true);
            });
        } catch (err) {
          console.error(err);
          navigate('/');
        }
      } else if (loggedIn === true) {
        navigate('/');
      }
    };
    socialLogin();
  }, [code, navigate, loggedIn, provider]);
}
export default LoginCallback;
