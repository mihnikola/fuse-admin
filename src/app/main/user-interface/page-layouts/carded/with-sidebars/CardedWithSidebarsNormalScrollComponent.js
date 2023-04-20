import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import DemoHeader from '../../shared-components/DemoHeader';
// import DemoContent from '../../shared-components/DemoContent';
import DemoSidebar from '../../shared-components/DemoSidebar';
import DemoSidebarRight from '../../shared-components/DemoSidebarRight';
// import DemoContent from '@fuse/core/DemoContent';
import Suggestion from 'src/app/main/apps/e-commerce/suggestions/Suggestion';
// import SuggestionHeader from 'src/app/main/apps/e-commerce/suggestions/SuggestionHeader';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
}));

function CardedWithSidebarsNormalScrollComponent() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
    setRightSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <Root
      header={
        <DemoHeader
          leftSidebarToggle={(ev) => {
            setLeftSidebarOpen(!leftSidebarOpen);
          }}
          rightSidebarToggle={(ev) => {
            setRightSidebarOpen(!rightSidebarOpen);
          }}
        />
      }
      content={<Suggestion />}
      // content={
        // <div>
        // <DemoHeader
        //   leftSidebarToggle={(ev) => {
        //     setLeftSidebarOpen(!leftSidebarOpen);
        //   }}
        //   rightSidebarToggle={(ev) => {
        //     setRightSidebarOpen(!rightSidebarOpen);
        //   }}
        // />
        // </div>
      // }
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      leftSidebarContent={<DemoSidebar />}
      rightSidebarOpen={rightSidebarOpen}
      rightSidebarOnClose={() => {
        setRightSidebarOpen(false);
      }}
      rightSidebarContent={<DemoSidebar />}
      scroll="content" //options of scroll normal, page and content
    />
  );
}

export default CardedWithSidebarsNormalScrollComponent;
