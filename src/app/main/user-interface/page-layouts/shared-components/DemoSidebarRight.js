import FuseNavigation from '@fuse/core/FuseNavigation';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SearchSidebar from './SearchSidebar';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ModalForm from 'src/app/main/apps/UI/ModalForm';

const navigationData = [
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
      },
      {
        id: '1.4',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '1.5',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '1.6',
        title: 'Ime Prezime',
        type: 'item-right',
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
      },
      {
        id: '2.2',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '2.3',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '2.4',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '2.5',
        title: 'Ime Prezime',
        type: 'item-right',
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
      },
      {
        id: '3.5',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.6',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.7',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.8',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.9',
        title: 'Ime Prezime',
        type: 'item-right',
      },
      {
        id: '3.10',
        title: 'Ime Prezime',
        type: 'item-right',
      },
    ],
  },
];

//   {
//     id: '1',
//     title: 'Actions',
//     subtitle: 'Task, project & team',
//     type: 'group',
//     children: [
//       {
//         id: '1.1',
//         title: 'Create task',
//         type: 'item',
//         icon: 'heroicons-outline:plus-circle',
//       },
//       {
//         id: '1.2',
//         title: 'Create team',
//         type: 'item',
//         icon: 'heroicons-outline:user-group',
//       },
//       {
//         id: '1.3',
//         title: 'Create project',
//         type: 'item',
//         icon: 'heroicons-outline:briefcase',
//       },
//       {
//         id: '1.4',
//         title: 'Create user',
//         type: 'item',
//         icon: 'heroicons-outline:user-add',
//       },
//       {
//         id: '1.5',
//         title: 'Assign user or team',
//         subtitle: 'Assign to a task or a project',
//         type: 'item',
//         icon: 'heroicons-outline:badge-check',
//       },
//     ],
//   },
//   {
//     id: '2',
//     title: 'Tasks',
//     type: 'group',
//     children: [
//       {
//         id: '2.1',
//         title: 'All tasks',
//         type: 'item',
//         icon: 'heroicons-outline:clipboard-list',
//         badge: {
//           title: '49',
//           classes: 'px-2 bg-primary text-on-primary rounded-full',
//         },
//       },
//       {
//         id: '2.2',
//         title: 'Ongoing tasks',
//         type: 'item',
//         icon: 'heroicons-outline:clipboard-copy',
//       },
//       {
//         id: '2.3',
//         title: 'Completed tasks',
//         type: 'item',
//         icon: 'heroicons-outline:clipboard-check',
//       },
//       {
//         id: '2.4',
//         title: 'Abandoned tasks',
//         type: 'item',
//         icon: 'heroicons-outline:clipboard',
//       },
//       {
//         id: '2.5',
//         title: 'Assigned to me',
//         type: 'item',
//         icon: 'heroicons-outline:user',
//       },
//       { id: '2.6', title: 'Assigned to my team', type: 'item', icon: 'heroicons-outline:users' },
//     ],
//   },
//   {
//     id: '3',
//     title: 'Settings',
//     type: 'group',
//     children: [
//       {
//         id: '3.1',
//         title: 'General',
//         type: 'collapse',
//         icon: 'heroicons-outline:cog',
//         children: [
//           {
//             id: '3.1.1',
//             title: 'Tasks',
//             type: 'item',
//           },
//           {
//             id: '3.1.2',
//             title: 'Users',
//             type: 'item',
//           },
//           {
//             id: '3.1.3',
//             title: 'Teams',
//             type: 'item',
//           },
//         ],
//       },
//       {
//         id: '3.2',
//         title: 'Account',
//         type: 'collapse',
//         icon: 'heroicons-outline:user-circle',
//         children: [
//           {
//             id: '3.2.1',
//             title: 'Personal',
//             type: 'item',
//           },
//           {
//             id: '3.2.2',
//             title: 'Payment',
//             type: 'item',
//           },
//           {
//             id: '3.2.3',
//             title: 'Security',
//             type: 'item',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '4',
//     type: 'divider',
//   },
// ];
const btnPrimary = {
  width: '100%',
  height: '20px',
  color: 'white',
  backgroundColor: 'blue',
  padding: '20',
  marginTop: '10',
  '&:hover': { backgroundColor: 'black' },
};
function DemoSidebarRight({ notification }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="px-12 py-24">
      <div className="text-3xl font-bold tracking-tighter">Dodati do sad:</div>
      <SearchSidebar placeholder="Pretrazi zaposlene" />
      {navigationData.length > 0 ? (
        <Box sx={{ overflow: 'auto', maxHeight: '670px' }}>
          {!notification && <FuseNavigation navigation={navigationData} className="px-0" />}
          {notification && <FuseNavigation navigation={notification} className="px-0" />}

          {notification && (
            <div className="flex flex-col bg-gray-100 gap-20">
              <Box>
                <Typography>
                  <b>104</b> obavestenja poslato
                </Typography>
              </Box>
              <Box>
                <Typography>
                  <b>103</b> obavestenja dospelo
                </Typography>
              </Box>
              <Box>
                <Typography>
                  <b>84</b> obavestenja procitano
                </Typography>
              </Box>
            </div>
          )}
          {!notification && (
            <div className="flex items-center justify-center py-16">
              {/* <Button size="small" variant="outlined">
                Sacuvaj grupu
              </Button> */}
              <Button size="small" variant="outlined" onClick={handleOpen}>
                Sacuvaj grupu
              </Button>
              {open && (
                <ModalForm
                  closeModal={handleClose}
                  openModal={open}
                  interactive="true"
                  label="Kreiraj ime grupe"
                  url="/obavestenja"
                  styleBtn={btnPrimary}
                />
              )}
            </div>
          )}
        </Box>
      ) : (
        <div className="flex flex-1 items-center justify-center p-16">
          <Typography className="text-24 text-center" color="text.secondary">
            Za sada nema nijedna kreirana grupa.
          </Typography>
        </div>
      )}
    </div>
  );
}

export default DemoSidebarRight;
