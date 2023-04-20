

import { useState } from 'react';
import { useThemeMediaQuery } from '@fuse/hooks';
import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import DemoSidebarRight from 'src/app/main/user-interface/page-layouts/shared-components/DemoSidebarRight';
import CreateContentNotification from './CreateContentNotification';
import EditBenefitEmployeesContent from '../benefits/EditBenefitEmployeesContent';
import { EmployeesGroupNotification } from './EmployeesGroupNotification';



export default function ChooseGroupNotification() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  return (
    <FusePageCarded
      // header={<EmployeesHeader />}
      content={<EmployeesGroupNotification />}
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
