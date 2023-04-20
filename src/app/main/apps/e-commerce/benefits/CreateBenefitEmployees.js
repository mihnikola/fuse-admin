import { useState } from 'react';
import { useThemeMediaQuery } from '@fuse/hooks';
import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import CreateBenefitEmployeesContent from './CreateBenefitEmployeesContent';
import DemoSidebarRight from 'src/app/main/user-interface/page-layouts/shared-components/DemoSidebarRight';

export default function CreateBenefitEmployees() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  return (
    <FusePageCarded
      // header={<EmployeesHeader />}
      content={<CreateBenefitEmployeesContent />}
      // scroll={isMobile ? 'normal' : 'content'}
      rightSidebarOpen={rightSidebarOpen}
      rightSidebarOnClose={() => {
        setRightSidebarOpen(false);
      }}
      rightSidebarContent={<DemoSidebarRight />}
      scroll="content" //options of scroll normal, page and content
    />
  );
}
