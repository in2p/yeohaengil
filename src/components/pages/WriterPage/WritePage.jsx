import '../../../styles/globals.css';
import { useState } from 'react';
import WriteImgBox from '../../atoms/WriteImgBox/WriteImgBox.jsx';
import WriteDayContents from '../../organisms/WriteDayContents/WriteDayContents.jsx';
import WriteButton from '../../atoms/WriteButton/WriteButton.jsx';
import WriteDestination from '../../molecules/WriteDestination/WriteDestination.jsx';
import CostAlert from '../../atoms/Alert/CostAlert.jsx';

function WritePage() {
  return (
    <div className="writeWrapper">
      <WriteImgBox />
      <CostAlert />
      <WriteDestination />
      <WriteDayContents />
      <WriteButton />
    </div>
  );
}

export default WritePage;
