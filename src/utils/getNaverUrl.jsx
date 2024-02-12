import React from 'react';

function getNaverUrl() {
  const authParams = new URLSearchParams({
    client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_NAVER_REDIRECT_URI,
    response_type: 'code',
    state: process.env.REACT_APP_NAVER_STATE,
  });
  return `https://nid.naver.com/oauth2.0/authorize?${authParams.toString()}`;
}
export default getNaverUrl;
