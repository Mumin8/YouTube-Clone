import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

function ChannelCard({ channelDetail }) {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px', 

    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column',
          justifyContent: 'center', textAlign: 'center',
          color: '#fff'
        }}>
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px'}}

          />
          <Typography variant='h5'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
             <Typography>
              { parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
             </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard