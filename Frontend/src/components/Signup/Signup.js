import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Signup.css';

export default function Signup() {
    return (
        <div className="Signup">
            <img
                width="300px"
                height="300px"
                src="http://www.downloadclipart.net/medium/63463-turntable-music-player-images.png"
                alt="Turntable Music Player PNG image"
            />
            <Typography margin={2} variant='h3'> Welcome to Groovy Records!</Typography>
            <TextField id="firstName" label="Enter First Name" variant="outlined"></TextField>
            <br />
            <TextField id="lastName" label="Enter Last Name" variant="outlined"></TextField>
            <br />
            <TextField id="userName" label="Enter Username" variant="outlined"></TextField>
            <br />
            <TextField id="password" label="Enter Password" variant="outlined"></TextField>
            <br />
            <Button variant="contained">Sign Up</Button>
            <Typography margin={1}>Already a member?</Typography>
            <Link href='/'>
                <Typography>
                    Log in
                </Typography>
            </Link>
        </div>
    )
}