import FuseNavigation from '@fuse/core/FuseNavigation';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const navigationData = [
  {
    id: '1',
    title: 'Ime Prezime',
    subtitle: '12 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '2',
    title: 'Ime Prezime',
    subtitle: '10 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '3',
    title: 'Ime Prezime',
    subtitle: '10 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '4',
    title: 'Ime Prezime',
    subtitle: '10 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '5',
    title: 'Ime Prezime',
    subtitle: '9 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '6',
    title: 'Ime Prezime',
    subtitle: '9 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '7',
    title: 'Ime Prezime',
    subtitle: '9 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '8',
    title: 'Ime Prezime',
    subtitle: '9 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '9',
    title: 'Ime Prezime',
    subtitle: '9 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  {
    id: '10',
    title: 'Ime Prezime',
    subtitle: '9 pozitivnih predloga',
    type: 'item',
    icon: 'heroicons-solid:star',
  },
  
  // {
  //   id: '1',
  //   title: 'Ime Prezime',
  //   description: '12 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '2',
  //   title: 'Ime Prezime',
  //   description: '10 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '3',
  //   title: 'Ime Prezime',
  //   description: '10 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '4',
  //   title: 'Ime Prezime',
  //   description: '10 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '5',
  //   title: 'Ime Prezime',
  //   description: '9 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '6',
  //   title: 'Ime Prezime',
  //   description: '9 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '7',
  //   title: 'Ime Prezime',
  //   description: '9 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '8',
  //   title: 'Ime Prezime',
  //   description: '9 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '9',
  //   title: 'Ime Prezime',
  //   description: '9 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '10',
  //   title: 'Ime Prezime',
  //   description: '9 pozitivnih predloga',
  //   type: 'item',
  //   icon: 'heroicons-solid:star',
  // },
  // {
  //   id: '1',
  //   title: 'Actions',
  //   subtitle: 'Task, project & team',
  //   type: 'group',
  //   children: [
  //     {
  //       id: '1.1',
  //       title: 'Create task',
  //       type: 'item',
  //       icon: 'heroicons-outline:plus-circle',
  //     },
  //     {
  //       id: '1.2',
  //       title: 'Create team',
  //       type: 'item',
  //       icon: 'heroicons-outline:user-group',
  //     },
  //     {
  //       id: '1.3',
  //       title: 'Create project',
  //       type: 'item',
  //       icon: 'heroicons-outline:briefcase',
  //     },
  //     {
  //       id: '1.4',
  //       title: 'Create user',
  //       type: 'item',
  //       icon: 'heroicons-outline:user-add',
  //     },
  //     {
  //       id: '1.5',
  //       title: 'Assign user or team',
  //       subtitle: 'Assign to a task or a project',
  //       type: 'item',
  //       icon: 'heroicons-outline:badge-check',
  //     },
  //   ],
  // },
  // {
  //   id: '2',
  //   title: 'Tasks',
  //   type: 'group',
  //   children: [
  //     {
  //       id: '2.1',
  //       title: 'All tasks',
  //       type: 'item',
  //       icon: 'heroicons-outline:clipboard-list',
  //       badge: {
  //         title: '49',
  //         classes: 'px-2 bg-primary text-on-primary rounded-full',
  //       },
  //     },
  //     {
  //       id: '2.2',
  //       title: 'Ongoing tasks',
  //       type: 'item',
  //       icon: 'heroicons-outline:clipboard-copy',
  //     },
  //     {
  //       id: '2.3',
  //       title: 'Completed tasks',
  //       type: 'item',
  //       icon: 'heroicons-outline:clipboard-check',
  //     },
  //     {
  //       id: '2.4',
  //       title: 'Abandoned tasks',
  //       type: 'item',
  //       icon: 'heroicons-outline:clipboard',
  //     },
  //     {
  //       id: '2.5',
  //       title: 'Assigned to me',
  //       type: 'item',
  //       icon: 'heroicons-outline:user',
  //     },
  //     { id: '2.6', title: 'Assigned to my team', type: 'item', icon: 'heroicons-outline:users' },
  //   ],
  // },
  // {
  //   id: '3',
  //   title: 'Settings',
  //   type: 'group',
  //   children: [
  //     {
  //       id: '3.1',
  //       title: 'General',
  //       type: 'collapse',
  //       icon: 'heroicons-outline:cog',
  //       children: [
  //         {
  //           id: '3.1.1',
  //           title: 'Tasks',
  //           type: 'item',
  //         },
  //         {
  //           id: '3.1.2',
  //           title: 'Users',
  //           type: 'item',
  //         },
  //         {
  //           id: '3.1.3',
  //           title: 'Teams',
  //           type: 'item',
  //         },
  //       ],
  //     },
  //     {
  //       id: '3.2',
  //       title: 'Account',
  //       type: 'collapse',
  //       icon: 'heroicons-outline:user-circle',
  //       children: [
  //         {
  //           id: '3.2.1',
  //           title: 'Personal',
  //           type: 'item',
  //         },
  //         {
  //           id: '3.2.2',
  //           title: 'Payment',
  //           type: 'item',
  //         },
  //         {
  //           id: '3.2.3',
  //           title: 'Security',
  //           type: 'item',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: '4',
  //   type: 'divider',
  // },
];

function DemoSidebar() {
  return (
    <div className="px-12 py-24 min-h-6xl">
      <div className="mx-12 text-3xl font-bold tracking-tighter">Top lista predlagača</div>
      {navigationData.length > 0 ?
      <div>
        <FuseNavigation navigation={navigationData} className="px-0" />
        
        <div className="flex items-center justify-center py-16"> 
          <Button size="small" variant="outlined">
            Vidi sve
          </Button>
        </div> 
        </div>
        :
        <div className="flex flex-1 items-center justify-center p-16">
          <Typography className="text-24 text-center" color="text.secondary">
            Za sada nema predloga.
          </Typography>
        </div>

      }
       
    </div>
  );
}

export default DemoSidebar;
