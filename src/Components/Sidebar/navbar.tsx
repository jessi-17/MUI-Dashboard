import * as React from 'react';
import { styled, useTheme, type Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { CSSObject } from '@emotion/react';
import { Container, Typography } from '@mui/material';
import { AccountCircle, Apps, CurrencyExchange, EditDocument, FactCheck, Home, LiveHelp, Logout, Paid, Security, VideoChat } from '@mui/icons-material';

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const navlinks = [
    {
        title: "home",
        icon: <Home sx={{ fontSize: 20 }} />
    },
    {
        title: "Profile",
        icon: <AccountCircle sx={{ fontSize: 20 }} />
    },
    {
        title: "Documents",
        icon: <EditDocument sx={{ fontSize: 20 }} />
    },
    {
        title: "Shortlist",
        icon: <FactCheck sx={{ fontSize: 20 }} />
    },
    {
        title: "Applications",
        icon: <Apps sx={{ fontSize: 20 }} />
    },
    {
        title: "Meet",
        icon: <VideoChat sx={{ fontSize: 20, mt: "6px" }} />
    },
    {
        title: "Transaction",
        icon: <Paid sx={{ fontSize: 20 }} />
    },
    {
        title: "Refer & Earn",
        icon: <CurrencyExchange sx={{ fontSize: 20 }} />
    },
    {
        title: "Privacy",
        icon: <Security sx={{ fontSize: 20 }} />
    },
    {
        title: "FAQ",
        icon: <LiveHelp sx={{ fontSize: 20 }} />
    },
]
export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open} sx={{
            border:0
        }} >
            <IconButton
                color='inherit'
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                // edge="start"
                sx={[
                    {
                        padding: 0,
                        marginTop: "20px",
                        
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    open && { display: 'none' },
                ]}
            >
                <MenuIcon style={{
                    height: "32px",
                    width: "32px"
                }} />
            </IconButton>
            <DrawerHeader sx={!open ? { display: 'none', } : undefined}>
                <Container maxWidth="xl" className='flex items-center justify-between logo-container' >
                    <Typography sx={{
                        fontWeight: "800",
                        fontFamily: "Figtree"
                    }} className='logo'>LOGO</Typography>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={!open ? { display: 'none', } : undefined}
                    >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </Container>
            </DrawerHeader>
            <List
                sx={[
                    {
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    },
                    open ? { paddingLeft: "24px", paddingRight: "24px", } : {}
                ]} >
                {navlinks.map((item) => (
                    <ListItem disablePadding sx={{
                        borderRadius: "12px",
                        padding: 0
                    }}>
                        <ListItemButton
                            sx={[
                                {
                                    height: 40,
                                },
                                open
                                ? {
                                    
                                    paddingLeft:"8px",
                                    paddingRight:"16px"

                                    }
                                    : {
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    },
                            ]}
                            className='!rounded-[12px] active-bg-color '
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,

                                        justifyContent: 'center',
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "14px"
                                    }
                                    , open ? {
                                        mr: "8px"
                                    } : {

                                    }
                                ]}
                                className='icon-color'
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText disableTypography
                                primary={item.title}
                                sx={[
                                    {
                                        textTransform: "capitalize",
                                    },
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            padding: 0,
                                            opacity: 0,
                                            display: "none"
                                        },
                                ]}
                                className='small-text-style'
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Container disableGutters className='absolute bottom-0'>
                <List disablePadding sx={[
                    {
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"

                    },
                    open ? { paddingLeft: "24px", paddingRight: "24px", } : {}
                ]} >
                    <ListItem disableGutters sx={{
                        borderRadius: "12px",
                        padding: 0
                    }}>
                        <ListItemButton disableRipple sx={[
                            {
                                height: 60,
                            },
                            open
                            ? {
                                justifyContent: 'initial',
                                paddingLeft:"8px",
                                paddingRight:"16px"
                            
                                }
                                : {
                                    justifyContent: 'center',
                                },
                        ]}
                            className='!rounded-[12px]'
                        >
                            <ListItemIcon sx={[
                                {
                                    minWidth: 0,
                                    justifyContent: 'center',
                                    width: "22px",
                                    height: "32px",
                                    alignItems: "center"
                                },
                                open
                                    ? {
                                        mr: "8px",
                                    }
                                    : {

                                    },
                            ]}
                                className='icon-color' >
                                <Logout style={{ color: "red" }} />
                            </ListItemIcon>
                            <ListItemText disableTypography
                                primary="Logout"
                                sx={[
                                    {
                                        textTransform: "capitalize",
                                    },
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            padding: 0,
                                            opacity: 0,
                                            display: "none"
                                        },
                                ]}
                                className='big-text-style'
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Container>
        </Drawer>
    );
}