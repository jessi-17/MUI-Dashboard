import {  ArrowDropDown, Logout, Notifications, PersonAdd, Search, Settings } from "@mui/icons-material"
import { Avatar, Badge, Box, Container, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import avatarimg from "../../assets/2.jpg"
import React from "react";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>

            <Container maxWidth="xl" sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
                justifyContent: "space-between", width: "100%",

            }}>

                <Box
                    sx={{
                        display: 'flex', alignItems: 'center', width: "300px", height: "36px", border:2, borderRadius: "36px",
                    }} className="searchbox"
                >
                    <IconButton type="button" aria-label="search" className="flex ">
                        <Search style={{ fontSize: "20px" }} />
                    </IconButton>
                    <InputBase
                        className="searchboxtext"
                        placeholder="Search....."
                        inputProps={{ 'aria-label': 'search....' }}
                    />
                </Box>

                <Box sx={{
                    display: "flex",
                    gap: "32px",
                    height:"44px",
                    alignItems: "center"
                }}>

                    <Badge color="primary" variant="dot">
                        <Notifications  style={{fontSize:"20px"}} className="text-gray-400"/>
                    </Badge>
                    <Box sx={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center"
                    }}>
                        <Avatar sx={{
                            width:"32px",
                            height:"32px",
                            objectFit:"cover"
                        }} src={avatarimg}></Avatar>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap:"1px"
                        }}>
                            <Typography variant="body2" className="header-username">username</Typography>
                            <Typography variant="caption" className="text-gray-500 header-useremail">jessi.bhagat@gmail.com</Typography>
                        </Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <ArrowDropDown />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            slotProps={{
                                paper: {
                                    elevation: 0,
                                    className:"menu",
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                       
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                },
                            }}
                            
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose} className="menu-item">
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose} className="menu-item">
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose} className="menu-item">
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem onClick={handleClose} className="menu-item">
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleClose} className="menu-item">
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Header