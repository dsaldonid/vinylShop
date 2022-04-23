import { Box, Badge, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css'
import { useState } from "react";
export default function Navbar() {
    const navigate = useNavigate()
    const [anchor,setAnchor] = useState(null)
    const open = Boolean(anchor)
    const handleClick = (event) =>{
        setAnchor(event.currentTarget)
    }
    const handleClose =()=>{
        setAnchor(null)
    }
    return (
        <div className="Navbar">
            <Box
                display="flex"
                justifyContent="space-between"
                px={5}
                height="64px"
            >
                <img
                    width="48px"
                    height="56px"
                    src="http://www.downloadclipart.net/medium/63463-turntable-music-player-images.png"
                    alt="Turntable Music Player PNG image"
                />
                <Box
                    display="flex"
                    flexDirection="row">
                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge>
                            <ShoppingCartIcon style={{ color: "#FFF" }} />
                        </Badge>
                    </IconButton>
                    <Box mt={1}>
                        <Avatar onClick={handleClick}>D</Avatar>
                    </Box>
                    <Menu
                        id="menu"
                        anchorEl={anchor}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby':'basic-button'
                        }}>
                            <MenuItem onClick={()=>navigate("/profile")}>Profile</MenuItem>
                            <MenuItem onClick={()=>navigate("/catalog")}>Catalog</MenuItem>
                            <MenuItem onClick={()=>navigate("/cart")}>Cart</MenuItem>
                            <MenuItem onClick={()=>navigate("/settings")}> Settings</MenuItem>
                            <MenuItem onClick={()=>navigate("/")}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </div>
    )
}