import React, {useState, useEffect} from 'react'
 import { Stack, Box,Typography } from '@mui/material'
 import SideBar from './SideBar'
 import Videos from './Videos'
 import { fetchFromRapidApi } from '../utils/fetchFromRapidApi'

function Feed() {
  const [selectCat, setSelectCat ] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() =>{
    fetchFromRapidApi(`search? part=snippet&q=${selectCat}`)
    .then((data) =>setVideos(data.items))
  }, [selectCat])
  return (
    <Stack sx={{ flexDirection: { sx: 'column',
    md: 'row',}}}>
      

<Box sx={{ height: {sx: 'auto', md: '92vh'},
borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
< SideBar selectCat = {selectCat} setSelectCat = {setSelectCat} />

<Typography className='copyright' 
variant='body2' sx={{mt: 1.5,
color: '#fff'}}>
  copyright 2002
</Typography>
</Box>

<Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
  <Typography variant='h4'
  fontWeight='bold' mb={2} sx={{
    color: 'white'
  }}>
    {selectCat}<span style={{color: '#F31503'}}> videos</span>
  </Typography>
  <Videos videos={videos} />
</Box>

    </Stack>
  )
}

export default Feed