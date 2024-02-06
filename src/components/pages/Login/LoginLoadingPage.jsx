import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginSpinner from '../../organisms/LoginSpinner/LoginSpinner.jsx';

import useOAuth from '../../../hooks/useOAuth.js';

function LoginLoadingPage({ setToken }) {
  document.body.classList.add('bg-main');
  const jwtToken = useOAuth();
  setToken(jwtToken);
  return <LoginSpinner />;
}
export default LoginLoadingPage;
