import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import './Catalog.css'
export default function Catalog() {
    return (
        <div className="Catalog">
            <Navbar></Navbar>
            <Box
                display="flex"
                justifyContent="space-between"
                mx={3}>
                <Typography variant="h3" mt={3.5}>
                    Catalog
                </Typography>
                <Box my={3}>
                    <TextField
                        id="search"
                        label="Search Artist or Genre"
                        type="search"
                        variant="standard"
                    />
                </Box>
            </Box>
            <Box m={5}
            display="flex">
                <Box>
                    <Typography variant="h4">
                        Genres
                    </Typography>
                    <Box
                        width={100}
                        display="flex"
                        flexDirection="column"
                    >
                        <Card className="card">
                            <Button fullWidth>Rap</Button>
                        </Card>
                        <Card className="card">
                            <Button fullWidth>Pop</Button>
                        </Card>
                        <Card className="card">
                            <Button fullWidth>Rock</Button>
                        </Card>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    width="150px"
                    mx={5}
                    my={5}>
                    <img
                        height="150px"
                        width="150px"
                        src="https://townsquare.media/site/812/files/2017/07/100000x100000-999.jpg"
                    ></img>
                    <Typography textAlign="center">
                        Flower Boy
                    </Typography>
                    <Typography textAlign="center">
                        $17.99
                    </Typography>
                    <Button>Add to CarT</Button>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    width="150px"
                    mx={5}
                    my={5}>
                    <img
                        height="150px"
                        width="150px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_G2KZq9reIgSMPAuSHIvzirxGhrr9NKqtw&usqp=CAU"
                    ></img>
                    <Typography textAlign="center">
                        To Pimp A Butterfly
                    </Typography>
                    <Typography textAlign="center">
                        $18.99
                    </Typography>
                    <Button>Add to CarT</Button>
                </Box>
            </Box>
        </div>
    )
}