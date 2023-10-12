import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromRapidApi } from '../utils/fetchFromRapidApi'

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail, videos)
  useEffect(() =>{
    fetchFromRapidApi(`channels? id=${id}&part=snippet`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromRapidApi(`search? channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
    
  }, [id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div  style={{background: 'rgb(2,0,36)',
      zIndex: 10, height: '200px'}}/>
      <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr: { sm: '100px'}}} />
          <Videos videos={videos} />
        
        </Box>
    </Box>
  )
}

export default ChannelDetail