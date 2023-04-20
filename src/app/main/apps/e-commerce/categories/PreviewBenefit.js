import FusePageSimple from '@fuse/core/FusePageSimple';
import { Avatar, Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { useState } from 'react';
import PreviewBenefitAbout from './PreviewBenefitAbout';
import BackRouting from '../../UI/BackRouting';
import BackButton from '../../UI/BackButton';
import { Link } from 'react-router-dom';
import HeaderBenefit from '../benefits/HeaderBenefit';
import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import { useThemeMediaQuery } from '@fuse/hooks';
import DemoSidebarRight from 'src/app/main/user-interface/page-layouts/shared-components/DemoSidebarRight';

function PreviewBenefit() {
  const [selectedTab, setSelectedTab] = useState(1);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);
  const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
      backgroundColor: theme.palette.background.paper,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      '& > .container': {
        maxWidth: '80%',
      },
    },
  }));
  return (
    // <div>
    //   <Root
    //     header={<HeaderBenefit />}
    //     content={
    //       <div className="flex flex-auto justify-center w-full max-w-5xl mx-auto p-24 sm:p-32">
    //         {/* {selectedTab === 0 && <TimelineTab />} */}
    //         {selectedTab === 1 && <PreviewBenefitAbout />}
    //         {/* {selectedTab === 2 && <PhotosVideosTab />} */}
    //       </div>
    //     }
    //     //   scroll={isMobile ? 'normal' : 'page'}
    //   />
    // </div>
    <FusePageCarded
      // header={<HeaderBenefit />}
      content={
        <>
        <HeaderBenefit />
        <div className="flex flex-auto justify-center w-full max-w-5xl mx-auto p-24 sm:p-32">
          {/* {selectedTab === 0 && <TimelineTab />} */}
          {selectedTab === 1 && <PreviewBenefitAbout />}
          {/* {selectedTab === 2 && <PhotosVideosTab />} */}
        </div>
        </>
      }
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

export default PreviewBenefit;
