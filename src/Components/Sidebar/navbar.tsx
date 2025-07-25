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
import { Avatar, Box, Button, Card, Collapse, Container,  Icon,  Typography } from '@mui/material';
import { AccountCircle, Apps, CurrencyExchange, EditDocument, ExpandLess, ExpandMore, FactCheck,  Home,  LiveHelp, Logout, Paid, PausePresentation, Security,  VideoChat } from '@mui/icons-material';
import avatarimg from "../../assets/2.jpg"
const drawerWidth = 250;

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
const navlinks1 = [
    {
        title: "home",
        icon: <Home sx={{ fontSize: 20 }} />
    },
    {
        title: "Profile",
        icon: <AccountCircle sx={{ fontSize: 20 }} />
    },
]
const navlinks2 = [
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
    const [openc, setOpenc] = React.useState(true);

    const handleClick = () => {
        setOpenc(!openc);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open} sx={{
            border: 0,
        }}
        className='DrawerComp'
        >
            <IconButton
                color='inherit'
                aria-label="open drawer"
                onClick={handleDrawerOpen}
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
                <Container  className='flex items-center justify-between logo-container' >
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
                        gap: "2px",
                    },

                    open ? { paddingLeft: "24px", paddingRight: "24px", } : {marginTop:"20px",marginInline:"8px",
                    }
                ]}
                aria-labelledby="nested-list-subheader"
            >
                {navlinks1.map((item) => (
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
                                        display:"flex",
                                        alignItems:"center",
                                        
                                    },
                                    open
                                        ? {
                                            padding:"10px",
                                            paddingLeft: "0px",
                                            paddingRight: "0px",
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
                <ListItem disablePadding sx={{
                        borderRadius: "12px",
                        padding: 0
                    }}>
                <ListItemButton onClick={handleClick}  sx={[
                                {
                                    height: 40,
                                },
                                open
                                    ? {  
                                        justifyContent:"center"
                                    }
                                    : {
                                        paddingLeft: "24px",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    },
                            ]}
                            className='!rounded-[12px] active-bg-color '>
                    <ListItemIcon sx={[
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
                                className='icon-color'>
                        <EditDocument sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    
                    <ListItemText  disableTypography
                                primary="Documents"
                                sx={[
                                    {
                                        textTransform: "capitalize",
                                    },
                                    open
                                        ? {
                                            opacity: 1,
                                            padding:"18px",
                                            paddingLeft: "0px",
                                            paddingRight: "32px",
                                        }
                                        : {
                                            padding: 0,
                                            opacity: 0,
                                            display: "none"
                                        },
                                ]}
                                className='small-text-style' />
                    {openc ? <ExpandLess style={{color:"gray"}} className='icon-style' /> : <ExpandMore style={{color:"gray"}} className='icon-style' />}
                </ListItemButton>
                </ListItem>
                <Collapse in={openc} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding

                    >
                        <ListItemButton sx={[
                                open
                                ? {
                                    height: 32,
                                    paddingLeft: "32px",
                                    paddingRight: "16px"
                                }
                                : {
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    },
                            ]}
                            className='!rounded-[12px] active-bg-color '>
                            <ListItemIcon sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "12px"
                                    }
                                    , open ? {
                                        mr: "8px"
                                    } : {

                                    }
                                ]}
                                className='icon-color'>
                                <PausePresentation sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary="PYQ"  disableTypography
                                sx={[
                                    {
                                        textTransform: "capitalize",
                                         display:"flex",
                                    alignItems:"center",
                                    // justifyContent:"center"
                                    },
                                    open
                                        ? {
                                            mt:"5px",
                                            opacity: 1,
                                            padding:"18px",
                                            paddingLeft: "0px",
                                            paddingRight: "0px",
                                        }
                                        : {
                                            padding: 0,
                                            opacity: 0,
                                            display: "none"
                                        },
                                ]}
                                className='small-text-style small-text-style-2'  />
                        </ListItemButton>
                        <ListItemButton sx={[
                                {
                                   
                                },
                                open
                                ? {
                                    height: 32,
                                    paddingLeft: "32px",
                                    paddingRight: "16px"
                                }
                                : {
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    },
                            ]}
                            className='!rounded-[12px] active-bg-color '>
                            <ListItemIcon sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "12px"
                                    }
                                    , open ? {
                                        mr: "8px"
                                    } : {

                                    }
                                ]}
                                className='icon-color'>
                                <PausePresentation sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary="Saved Questions"  disableTypography
                                sx={[
                                    {
                                        textTransform: "capitalize",
                                         display:"flex",
                                    alignItems:"center",
                                    // justifyContent:"center"
                                    },
                                    open
                                        ? {
                                            mt:"5px",
                                            opacity: 1,
                                            padding:"18px",
                                            paddingLeft: "0px",
                                            paddingRight: "0px",
                                        }
                                        : {
                                            padding: 0,
                                            opacity: 0,
                                            display: "none"
                                        },
                                ]}
                                className='small-text-style small-text-style-2'  />
                        </ListItemButton>
                        <ListItemButton sx={[
                                {
                                   
                                },
                                open
                                ? {
                                    height: 32,
                                    paddingLeft: "32px",
                                    paddingRight: "16px"
                                }
                                : {
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    },
                            ]}
                            className='!rounded-[12px] active-bg-color '>
                            <ListItemIcon sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "12px"
                                    }
                                    , open ? {
                                        mr: "8px"
                                    } : {

                                    }
                                ]}
                                className='icon-color'>
                                <PausePresentation sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary="Important Lectures"  disableTypography
                                sx={[
                                    {
                                        textTransform: "capitalize",
                                         display:"flex",
                                    alignItems:"center",
                                    // justifyContent:"center"
                                    },
                                    open
                                        ? {
                                            mt:"5px",
                                            opacity: 1,
                                            padding:"18px",
                                            paddingLeft: "0px",
                                            paddingRight: "0px",
                                        }
                                        : {
                                            padding: 0,
                                            opacity: 0,
                                            display: "none"
                                        },
                                ]}
                                className='small-text-style small-text-style-2'  />
                        </ListItemButton>
                    </List>
                </Collapse>
                {navlinks2.map((item) => (
                    <ListItem disablePadding sx={{
                        borderRadius: "12px",
                    }}>
                        <ListItemButton
                            sx={[
                                {
                                    height: 40,
                                },
                                open
                                    ? {
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
                                            padding:"18px",
                                            paddingLeft: "0px",
                                            paddingRight: "0px",
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
            <Container disableGutters className='absolute bottom-0 flex flex-col gap-[4px]'>
            <Box className="flex flex-col gap-[8px]">
                <Card elevation={0}
                     sx={[
                    {
                        display:"flex",
                        flexDirection:"column",
                        gap:"8px"
                    },
                    open ? {
                        marginLeft: "24px", marginRight: "24px", 
                        paddingX:"10px",
                        paddingY:"18px"
                    } : 
                    {display:"none",
                    }
                ]}
                className='sessioncard'
                    >
                <Box sx={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center"
                    }} className="">
                        <Avatar sx={{
                            width:"32px",
                            height:"32px",
                            objectFit:"cover"
                        }} src={avatarimg}></Avatar>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap:"0px"
                        }} className="user-id">
                            <Typography variant="body2" className="header-username2">username</Typography>
                            <Typography variant="body2" className=" header-useremail2">jessi.bhagat@gmail.com</Typography>
                        </Box>
                        </Box>
                    <Typography variant='body2'  className='para-session'>some thing written here.</Typography>
                    <Button variant="contained" sx={{
          }} className="btn-1 btn-2">Book A Session</Button>
                </Card>
                </Box>
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
                                    paddingLeft: "8px",
                                    paddingRight: "16px"

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