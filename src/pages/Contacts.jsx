import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

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
        }
      }}>
        <Typography variant='h4'>
          Contacts
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga, beatae corrupti nisi repellat consectetur, debitis deleniti rerum veniam ab libero sit nostrum accusantium recusandae! Sint fuga ex iste placeat.</p>
      </Box>
      <Box>
        <TableContainer component={Paper} >
          <Table aria-label= "contact table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contacts