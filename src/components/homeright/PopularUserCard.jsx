import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react'
import { red } from '@mui/material/colors';

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <Button size='small'>
            Follow
          </Button>
        }
        title="Aman"
        subheader="@ithakuraman"
      />
    </div>
  )
}

export default PopularUserCard
