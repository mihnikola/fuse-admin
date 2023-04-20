import FusePageCarded from "@fuse/core/FusePageCarded/FusePageCarded";
import { useThemeMediaQuery } from "@fuse/hooks";
import { useState } from "react";
import DemoSidebarRight from "src/app/main/user-interface/page-layouts/shared-components/DemoSidebarRight";
import EditBenefitEmployeesContent from "./EditBenefitEmployeesContent";

export default function EditBenefitEmployees() {

  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  return (
    <FusePageCarded
      // header={<EmployeesHeader />}
      content={<EditBenefitEmployeesContent />}
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
