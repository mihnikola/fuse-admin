

import { useState } from 'react';
import { useThemeMediaQuery } from '@fuse/hooks';
import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import DemoSidebarRight from 'src/app/main/user-interface/page-layouts/shared-components/DemoSidebarRight';

import { EmployeesGroupNotification } from './EmployeesGroupNotification';
import EditAllNotification from './EditAllNotification';


const navigationDataGroup = [
  {
    id: '1',
    title: 'FINALNA OBRADA',
    translate: 'finalna_obrada',
    type: 'collapse-right',
    children: [
      {
        id: '1.1',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '1.2',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '1.3',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '1.4',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '1.5',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '1.6',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '1.7',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '1.8',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '1.9',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '1.10',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
    ],
  },
  {
    id: '2',
    title: 'PAKOVANJE',
    translate: 'pakovanje',
    type: 'collapse-right',
    children: [
      {
        id: '2.1',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.2',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.3',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.4',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.5',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.6',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '2.7',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.8',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '2.9',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '2.10',
        title: 'Ime Prezime',
        type: 'item-right',
      },
    ],
  },
  {
    id: '3',
    title: 'OSTALI',
    translate: 'ostali',
    type: 'collapse-right',
    children: [
      {
        id: '3.1',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.2',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.3',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.4',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.5',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.6',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.7',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.8',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.9',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,

      },
      {
        id: '3.10',
        title: 'Ime Prezime',
        type: 'item-right',
        seen: true,
      },
    ],
  },
];


export default function EditNotification() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  return (
    <FusePageCarded
      // header={<EmployeesHeader />}
      content={<EditAllNotification />}
      scroll={isMobile ? 'normal' : 'content'}
      rightSidebarOpen={rightSidebarOpen}
      rightSidebarOnClose={() => {
        setRightSidebarOpen(false);
      }}
      rightSidebarContent={<DemoSidebarRight notification={navigationDataGroup} />}
    //   scroll="content" //options of scroll normal, page and content
    />
  );
}
