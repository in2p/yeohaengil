import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { setLoggedIn } from '../../../store.jsx';

import LoginSpinner from '../../organisms/LoginSpinner/LoginSpinner.jsx';

function LoginLoadingPage() {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');
  const called = useRef(false); // prevent rerender caused by StrictMode
  const { loggedIn } = useSelector(state => state); // redux is logged in?
  const [provider, setProvider] = useState(''); // naver or kakao

  // 화면 주황색으로 바꾸고 url 에서 provider(kakao, naver) 알아낸다.
  useEffect(() => {
    const { pathname } = new URL(window.location.href);
    const segments = pathname.split('/');
    setProvider(segments[segments.length - 1]);
    document.body.classList.add('bg-main');
  }, []);

  // 인가코드 백으로 보내는 코드
  useEffect(() => {
    const socialLogin = async () => {
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_SERVER_URL}/${provider}?code=${code}`,
            headers: {
              'Content-Type': 'application/json;charset=utf-8', // json형태로 데이터를 보내겠다는뜻
              'Access-Control-Allow-Origin': '*', // 이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
            },
          }).then(res => {
            // 백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
            console.log(res);

            // 여기서부터 res 로 다시 jwt 통신하여 필요한 정보들 전부 저장 한다.
            setLoggedIn(true);

            // 계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
            // localStorage.setItem('name', res.data.account.socialName);
            // 로그인이 성공하면 이동할 페이지
            // navigate('/');
          });
        } catch (err) {
          console.error(err);
          navigate('/login');
        }
      } else if (loggedIn === true) {
        navigate('/');
      }
    };
    socialLogin();
  }, [code, navigate, loggedIn, provider]);

  return <LoginSpinner />;
}
export default LoginLoadingPage;
