import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icon-material/LockOutlinedIcon';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function App() {
  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{
        marginTop:8,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
      <Avatar sx={{ m:1,bgcolor:'secondary.main'}}>
        <LockOutlinedIcon/>
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sing in
      </Typography>
     
      <TextField label="Email Address" required fullwidth name="email" margin="normal" autocomplete autofocus/>
      <TextField label="Password" type="password" required fullwidth name="password" autocomplete="current-password" margin="normal"/>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      <Button type="submit" variant="contained" fullWidth sx={{mt:3}}>Sign In</Button>
      <Grid container>
        <Grid item>
          <Link>Forgot password?</Link>
        </Grid>
        <Grid item>
          <Link>Sign Up</Link>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}
