import React from 'react';
import SettingProfile from '../../molecules/SettingProfile/SettingProfile.jsx';
import SettingAlarm from '../../molecules/SettingAlarm/SettingAlarm.jsx';
import SettingNotice from '../../molecules/SettingNotice/SettingNotice.jsx';
import SettingLogout from '../../atoms/SettingLogout/SettingLogout.jsx';

function SettingAll() {
  return (
    <div>
      <SettingProfile />
      <SettingAlarm />
      <SettingNotice />
      <SettingLogout />
    </div>
  );
}

export default SettingAll;
