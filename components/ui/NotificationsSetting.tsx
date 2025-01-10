'use client';

import { Switch, Divider } from '@mantine/core';
import { useState } from 'react';

const ProfileInformation = () => {
  const [isCheckedFirst, setIsCheckedFirst] = useState(true);
  const [isCheckedSecond, setIsCheckedSecond] = useState(true);

  return (
    <div className="mt-[10.5%]">
      <h4 className="text-[22px] md:text-xl font-semibold mt-[2] mb-[5%]">Notifications</h4>

      <div className="flex justify-between mt-10 mb-5">
        <h4 className="text-[18px] md:text-sm">Product updates and community announcements</h4>
        <Switch
          checked={isCheckedFirst}
          onChange={(event) => setIsCheckedFirst(event.currentTarget.checked)}
          styles={{
            track: {
              backgroundColor: isCheckedFirst ? '#2A85FF' : '#565656', 
              border: "none" 
            },
            thumb: {
                backgroundColor: isCheckedFirst ? '#fff' : '#000', 
              border: "none" 

            },
          }}
        />
      </div>

      <Divider color="#272B30" />

      <div className="flex flex-row justify-between mt-8 mb-5">
        <h4 className="text-[18px] md:text-sm">Marketing newsletter</h4>
        <Switch
          checked={isCheckedSecond}
          onChange={(event) => setIsCheckedSecond(event.currentTarget.checked)}
          styles={{
            track: {
              backgroundColor: isCheckedSecond ? '#2A85FF' : '#565656',
              border: "none" 
            },
            thumb: {
                backgroundColor: isCheckedSecond ? '#fff' : '#000', 
              border: "none" 

            },
          }}
        />
      </div>

      <Divider color="#272B30" />
    </div>
  );
};

export default ProfileInformation;
