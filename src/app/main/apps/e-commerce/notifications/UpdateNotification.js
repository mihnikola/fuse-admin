import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import { useThemeMediaQuery } from '@fuse/hooks';
import React from 'react'
import { useState } from 'react';
import DemoSidebarRight from 'src/app/main/user-interface/page-layouts/shared-components/DemoSidebarRight';
import EditContentNotification from './EditContentNotification';

function UpdateNotification() {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);
  
    return (
      <FusePageCarded
        // header={<EmployeesHeader />}
        content={<EditContentNotification />}
        scroll={isMobile ? 'normal' : 'content'}
        rightSidebarOpen={rightSidebarOpen}
        rightSidebarOnClose={() => {
          setRightSidebarOpen(false);
        }}
        rightSidebarContent={<DemoSidebarRight />}
      //   scroll="content" //options of scroll normal, page and content
      />
    );
}

export default UpdateNotification
