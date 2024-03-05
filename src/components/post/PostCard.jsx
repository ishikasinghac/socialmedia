import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const PostCard = () => {
  return (
    <Card className='justify-between'> 
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ishika and kanha"
        subheader="@isha"
      />

    <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2016/11/18/13/53/idol-1834688_1280.jpg"
        alt="Paella dish"
      />            
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between " disableSpacing>
        <div>
        <IconButton aria-label="like">
          {true? <FavoriteIcon/>: <FavoriteBorderIcon/>}
        </IconButton>

        <IconButton aria-label="comment">
          <ChatBubbleIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        </div>

        <div>
        <IconButton aria-label="share">
        {true?<BookmarkBorderIcon/>:<BookmarkIcon/>}
        </IconButton>
        </div>
        
      </CardActions>
    </Card>
  )
}

export default PostCard
