import LoginSpinner from '../../organisms/LoginSpinner/LoginSpinner.jsx';

function LoginLoadingPage() {
  document.body.classList.add('bg-main');
  // 화면 주황색으로 바꾸고 url 에서 provider(kakao, naver) 알아낸다.

  return <LoginSpinner />;
}
export default LoginLoadingPage;
