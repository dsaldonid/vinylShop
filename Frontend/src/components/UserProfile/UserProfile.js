import { Button, Chip,Box, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './UserProfile.css'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from "react-router-dom"

export default function UserProfile() {
    const [problem, setProblem] = useState(null);
    const navigate = useNavigate()

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setProblem(event.target.value);
    }
    const handleValue = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="UserProfile">
            <Navbar />
            <Typography variant="h2">
                Welcome Diego
            </Typography>
            <QuestionMarkIcon onClick={()=>{alert("Learn more about the user page, video to come!")}}></QuestionMarkIcon>
            <Button onClick={()=>navigate('/catalog')}>Go to Catalog</Button>
            <Typography variant="h2">
                Previous Orders
            </Typography>
            <h2>Each order will be a card</h2>
            <Typography variant="h2">
                About You
            </Typography>
            <Typography>
                Favorite Genre
            </Typography>
            <Stack
                direction="row"
                id="stack">
                <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                    sx={{p: 2, border: '1px solid grey',m:2, alignItems:"flex-start"}} 
                >
                    <Chip sx={{mx:1}} label="Rap" variant="outlined" onDelete={() => { console.log('delete') }} />
                    <Chip sx={{mx:1}} label="Pop" variant="outlined" onDelete={() => { console.log('delete') }} />
                </Box>
            </Stack>
            <Button>Add More Genres</Button>
            <Typography>
                Favorite Artist(s)
            </Typography>
            <Stack
                direction="row"
                id="stack">
                <Paper 
                elevation={1}
                sx={{padding:"8px"}} 
                >
                    <Chip label="Rap" variant="outlined" onDelete={() => { console.log('delete') }} />
                    <Chip label="Pop" variant="outlined" onDelete={() => { console.log('delete') }} />
                </Paper>
            </Stack>
            <Button>Add More Artists</Button>
            <h2>Add bullets to user profile</h2>
            <Button variant="contained">Edit</Button>
            <Typography variant="h2">
                Payment Info
            </Typography>
            <h2>Considering having payment info in seperate page</h2>
            <Typography variant="h2">
                Leave Feedback
            </Typography>
            <InputLabel id="issue-label">What's the problem?</InputLabel>
            <Select
                labelId="issue-label"
                id="issue-select"
                value={problem}
                onChange={handleChange}
            >
                <MenuItem value={1}>Too Slow</MenuItem>
                <MenuItem value={2}>Doesn't have what I want</MenuItem>
                <MenuItem value={3}>Too little cowbell</MenuItem>
            </Select>
            <Typography variant="h2">
                Write Feedback
            </Typography>
            <TextField
                id="writtenFeedback"
                label="Write Feedback Here"
                multiline
                maxRows={4}
                value={value}
                onChange={handleValue}
            />
            <Button variant="contained">
                Submit
            </Button>
        </div>
    )
}