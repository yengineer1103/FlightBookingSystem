import { Button,Backdrop, Grid, Paper, Stack,FormControl,RadioGroup,TextField,FormControlLabel,Radio } from '@mui/material'
import { AirlineSeatIndividualSuite, AirlineSeatLegroomExtra } from '@mui/icons-material';
import React, { useState } from 'react'

export default function BookingInfo() {
    const [selectedSeats,setSelectedSeats]=useState([])
    const [formData,setFormData]=useState({
        source:"",
        dest:"",
        departureDate:new Date(),
        returnDate:new Date(),
        travellers:"",
        date:new Date()
    })
    const handleInputChange=event=>{
        const {name,value}=event.target;
        setFormData(prevData=>({
            ...prevData,[name]:value
        }))
    }

    const handleSeatClick=(seat)=>{
        if(selectedSeats.includes(seat)){
            setSelectedSeats(selectedSeats.filter(s=>s!==seat))
        }
        else{
            setSelectedSeats([...selectedSeats,seat])
        }
    }

    const renderSeat=(seatNumber)=>{
        const isSelected=selectedSeats.includes(seatNumber)

        return(
            <Button
                variant={isSelected?'contained':'outlined'}
                startIcon={isSelected?<AirlineSeatIndividualSuite/>:<AirlineSeatLegroomExtra/>}
                onClick={()=>handleSeatClick(seatNumber)}
            >
                {seatNumber}
            </Button>
        )
    }

    const renderAirlineSeatsView=()=>{
        return(
            <div>
                <Grid container spacing={2}>
                    {Array.from({length:6},(_,row)=>(
                        <Grid container item justifyContent={'center'} key={'row'}>
                            {Array.from({length:5},(_,col)=>(
                                <Grid item key={col}>
                                    <Paper elevation={3} sx={{p:2}}>
                                        {renderSeat(`${String.fromCharCode(65+row)}${col+1}`)}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }

    const renderPersonalInfo=()=>{
        return(
            <Paper elevation={6}>
                    <div className='inner-search-form'>
                        <h3>Enter Personal Information</h3>
                            
                            <div>
                                <TextField
                                    label="From"
                                    variant="outlined"
                                    name='source'
                                    onChange={handleInputChange}
                                />
                                &nbsp;
                                <TextField
                                    label="To"
                                    variant="outlined"
                                    name='dest'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <br/>
                            <div>
                                <Stack direction={'row'}>
                                    <TextField
                                        label="Date of Birth"
                                        variant="outlined"
                                        type='date'
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        name='date'
                                    />
                                    
                                </Stack>
                            </div>
                        </div>
                    </Paper>
        )
    }

  return (
    <React.Fragment>
        <h3>Enter your info to continue booking</h3>
        {renderAirlineSeatsView()}
        {renderPersonalInfo()}
        <br/>
        <Button variant='contained'>Book this flight</Button>
        
    </React.Fragment>
  )
}

