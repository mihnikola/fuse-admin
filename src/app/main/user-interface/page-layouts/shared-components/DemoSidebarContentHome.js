import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar, Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';


export default function DemoSidebarContentHome() {

    const navigationData = [
        {
          id: '1',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 84%',
          subtitle2: 'KPI 2: 8',
          photoUrl: "assets/images/avatars/male-01.jpg",
        },
        {
          id: '2',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 82%',
          subtitle2: 'KPI 2: 8',
          photoUrl: "assets/images/avatars/female-16.jpg",
        },
        {
          id: '3',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 79%',
          subtitle2: 'KPI 2: 7',
          photoUrl: "assets/images/avatars/female-14.jpg",
        },
        {
          id: '4',
          title: 'Ime Prezime',
          subtitle: 'KPI 1: 79%',
          subtitle2: 'KPI 2: 6',
          photoUrl: "assets/images/avatars/male-09.jpg",
        },
        {
          id: '5',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 78%',
          subtitle2: 'KPI 2: 6',
          photoUrl: "assets/images/avatars/male-06.jpg",
        },
        {
          id: '6',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 78%',
          subtitle2: 'KPI 2: 5',
          photoUrl: "assets/images/avatars/male-13.jpg",
        },
        {
          id: '7',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 76%',
          subtitle2: 'KPI 2: 5',
          photoUrl: "assets/images/avatars/female-17.jpg",
        },
        {
          id: '8',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 75%',
          subtitle2: 'KPI 2: 5',
          photoUrl: "assets/images/avatars/female-20.jpg",
        },
        {
          id: '9',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 74%',
          subtitle2: 'KPI 2: 5',
          photoUrl: "assets/images/avatars/female-18.jpg",
        },
        {
          id: '10',
          title: 'Ime Prezime',
          subtitle1: 'KPI 1: 74%',
          subtitle2: 'KPI2 4',
          photoUrl: "assets/images/avatars/male-05.jpg",
        }
    ];

  return (
    
   <div>
    {navigationData.length > 0 ? 
    <Box  sx={{ borderBottom: 1, borderRight: 1, borderLeft: 1, borderColor: 'divider', maxHeight: '650px', overflow: 'auto'}}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      aria-label="contacts"
    >
        
    {navigationData.map((list) =>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={`${list.id}.`} />
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar alt={`Zaposleni${list.id}`} src={list.photoUrl} />
                    </ListItemAvatar>                    
                </ListItemIcon>
                <Box>
                    <ListItemText primary={list.title} sx={{margin: 0}} />
                    <ListItemText primary={list.subtitle1} sx={{margin: 0}} />
                    <ListItemText primary={list.subtitle2} sx={{margin: 0}} />
                </Box>
            </ListItemButton>
        </ListItem>
    )}
    </List>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1.6rem', paddingBottom: '1.6rem'}}>
        <Button size="small" variant="outlined"> Vidi celu listu</Button>
    </Box>
   </Box>
    : 
    <div className="flex flex-1 items-center justify-center p-16">
        <Typography className="text-24 text-center" color="text.secondary">
            Za sada nema top 10 zaposlenih.
        </Typography>
    </div>
}
</div>
    
    
       
  );
}