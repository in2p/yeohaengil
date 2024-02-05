import React from 'react';

function getKakaoUrl() {
  const authParams = new URLSearchParams({
    client_id: process.env.REACT_APP_KAKAO_JS_KEY,
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    response_type: 'code',
  });
  return `https://kauth.kakao.com/oauth/authorize?${authParams.toString()}`;
}
export default getKakaoUrl;
