import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'


function About() {
  return (
    <Layout>
      <Box sx={{
        backgroundColor: 'lightgray',
        my:16,
        textAlign: 'center',
        '& h4': {
          fontWeight: 'bold',
          my : 2,
          fontSize: "2rem",
        },
        '& p': {
          textAlign: 'justify',
          ml: 2,
          mr: 2,
        },
        '@media (max-width : 600px)':{
          my: 0,
        },
      }}>
        <Typography variant= "h4">
          Welcome To My Resturent
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta officia commodi asperiores nam nesciunt, ad impedit, voluptas maiores corporis iste unde at. Corrupti soluta corporis, beatae est iste quidem minima reprehenderit adipisci. Cupiditate ut voluptates sed rem, ea amet hic architecto mollitia, dignissimos, ducimus saepe itaque? Voluptatem possimus maiores, minus, veritatis sapiente rem iusto quibusdam pariatur repudiandae modi voluptatum. Alias inventore mollitia tenetur unde dignissimos accusamus blanditiis laborum, nulla provident voluptatem repellendus eaque placeat optio exercitationem, pariatur iusto facere odio similique modi earum nam et ad ratione cum? Debitis ab cupiditate et voluptatem fugit animi molestiae ratione dolor commodi neque! </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ratione recusandae expedita, suscipit aut magni aperiam repellat qui consectetur. Cumque quibusdam, id possimus ut nobis a repellat, corrupti maiores inventore accusantium voluptas accusamus nemo atque asperiores similique debitis esse maxime eaque, minus nulla at. Mollitia, cupiditate dolore nisi similique sed commodi. Iure molestias, deserunt doloremque, dolores quia repellendus tenetur numquam aspernatur iusto asperiores eveniet eligendi ullam fuga quos. Quibusdam, alias natus? Amet alias non delectus rem debitis unde aliquam veritatis veniam aliquid animi quae, dolorem voluptate nesciunt ducimus omnis asperiores. Neque in illum rerum sit iste vel! Minus, tempora nam.</p>
      </Box>
    </Layout>
  )
}

export default About