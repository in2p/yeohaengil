import React from 'react';

import MyProfileModule from '../../organisms/MyProfileModule/MyProfileModule.jsx';
import MySelectModule from '../../molecules/MySelectModule/MySelectModule.jsx';

function MyPage() {
  return (
    <div>
      <MyProfileModule />
      <MySelectModule select="right" />
    </div>
  );
}
export default MyPage;
