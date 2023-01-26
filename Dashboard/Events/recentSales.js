import { Box, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useStyles } from './style'

export const RecentSales = () => {
    const classes = useStyles()
  return (
<Box>
<Typography className={classes.title}>Recent Sells</Typography>
<Box className={classes.cardBox}>
<Box className={`${classes.flex50} ${classes.ticketBox}`}>
<Typography className={classes.subTitle}>This week</Typography>
<Typography className={classes.cardTickets}>557 Tickets <AiOutlineArrowUp style={{color:"green"}}/></Typography>
</Box>
<Box className={`${classes.flex50} ${classes.ticketBox}`}>
<Typography className={classes.subTitle}>Previous week</Typography>
<Typography className={classes.cardTickets}>458 Tickets <AiOutlineArrowDown style={{color:"red"}}/></Typography>
</Box>
</Box>
</Box>
  )
}
