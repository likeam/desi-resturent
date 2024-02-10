import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contacts() {
  return (
    <Layout>
      <Box sx={{
        my : 10,
        ml : 2,
        mr : 2,
        '& h4':{
          fontWeight : 'bold',
          mb: 2,
        },       
      }}>
        <Typography variant='h4'>
          Contacts
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga, beatae corrupti nisi repellat consectetur, debitis deleniti rerum veniam ab libero sit nostrum accusantium recusandae! Sint fuga ex iste placeat.</p>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{backgroundColor: 'lightslategray'}} >
          <Table aria-label= "contact table" >
            <TableHead > 
              <TableRow>
                <TableCell align='center'>
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>
                  <SupportAgentIcon sx={{color: 'red', pt: 1}} />  111-222-333 (Toll Free)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell align='center'>
                  <EmailIcon sx={{color: 'blue', pt: 1}} />  Support@gmail.com
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell align='center'>
                  <WhatsAppIcon sx={{color: 'green', pt: 1}} />  03001112221
                </TableCell>                 
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contacts