import React from 'react';

import MyProfileModule from '../../organisms/MyProfileModule/MyProfileModule.jsx';
import MySelectModule from '../../molecules/MySelectModule/MySelectModule.jsx';
import MyGridView from '../../organisms/MyGridView/MyGridView.jsx';

function MyPage() {
  return (
    <div>
      <MyProfileModule />
      <MySelectModule select="right" />
      <MyGridView />
    </div>
  );
}
export default MyPage;
