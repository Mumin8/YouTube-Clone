import React, {useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Video } from './'
import { fetchFromRapidApi } from '../utils/fetchFromRapidApi'

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null)
  const { id } = useParams()

  useEffect(()=>{
    fetchFromRapidApi(`videos? part=snippet, statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

  }, [id])
  if (!videoDetail?.snippet) return 'Loading'

const { snippet: {title, channelId, channelTitle}, statistics:{viewCount,
likeCount}} = videoDetail

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
      <Box flex={1}>
        <Box sx={{ width: '100%', position: 'sticky',
      top: '80px'}}>
        <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}
        className= 'react-player' controls />
        <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
          {title}
        </Typography>
        <Stack direction='row' justifyContent='space-between'
        sx={{
          color: 'white'
        }} py={1} px={2}>
          <Link to={`/channel/${channelId}`}>
            <Typography>
              {channelTitle}
            </Typography>
          </Link>
        </Stack>
        </Box>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail