import React from 'react';
import {Box, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <>
      <Box sx = {{textAlign:' center', bgcolor: 'black', color: 'white', p: 3}}>
        <Box sx={{ 
          my: 2,
          '& svg':{
            fontSize: "40px",
            cursor: "pointer",
            mr : 2,
          },
            "& svg:hover":{
              color: 'goldenrod',
              trnasform: 'translateX(5px)',
              transition: 'all 400ms'
            }
          }}>
          <InstagramIcon />
          <XIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <GitHubIcon />
        </Box>
        <Typography variant='h5' sx={{'@media (max-width: 600px)':{fontSize: '1rem'}}}>
          All  Rights Reserved &copy; Haia B
        </Typography>
      </Box>   
    </>
  )
}

export default Footer