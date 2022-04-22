import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Login.css';

export default function Login() {
    return (
        <div className="Login">
            <img
                width="300px"
                height="300px"
                src="http://www.downloadclipart.net/medium/63463-turntable-music-player-images.png"
                alt="Turntable Music Player PNG image"
            />
            <Typography margin={1} variant='h2'>Groovy Records</Typography>
            <TextField id="username" label="Enter Username" variant="outlined"></TextField>
            <br/>
            <TextField id="password" label="Enter Password" variant="outlined"></TextField>
            <br/>
            <Button variant="contained">Login</Button>
            <Typography margin={1}>New to Groovy Records?</Typography>
            <Link href='/signup'>
                <Typography>
                    Sign Up
                </Typography>
            </Link>
        </div>
    )
}