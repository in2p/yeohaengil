import { React, useState } from 'react';
import '../../../styles/globals.css';

import FollowingView from '../../molecules/FollowingView/FollowingView.jsx';
import FollowerView from '../../molecules/FollowerView/FollowerView.jsx';

const followings = [
  { name: 'Following 01', img: '', following: false },
  { name: 'Following 02', img: '', following: true },
  { name: 'Following 03', img: '', following: false },
];
const followers = [
  { name: 'Follower 01', img: '', block: false },
  { name: 'Follower 02', img: '', block: false },
  { name: 'Follower 03', img: '', block: true },
];

function FollowPage() {
  const [selector, setSelector] = useState(false);
  const handleSelector = () => {
    setSelector(!selector);
  };
  if (!selector) {
    return <FollowerView items={followers} handleSelector={handleSelector} />;
  }
  return <FollowingView items={followings} handleSelector={handleSelector} />;
}
export default FollowPage;
