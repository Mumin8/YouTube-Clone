import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css';
import {Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from './components'

function App() {
  return (
    <BrowserRouter>
    <Box sx={{background: '#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
      </Routes>
      
    </Box>

    </BrowserRouter>
  );
}

export default App;
