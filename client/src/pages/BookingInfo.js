import { Button,Backdrop, Grid, Paper, Stack,FormControl,RadioGroup,TextField,FormControlLabel,Radio,Alert,AlertTitle } from '@mui/material'
import { AirlineSeatIndividualSuite, AirlineSeatLegroomExtra} from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveBooking } from '../components/action/flight-actions';
import { useParams, useSearchParams } from 'react-router-dom';

export default function BookingInfo() {

    const dispatch=useDispatch(); 
    const {flid}=useParams()

    const [selectedSeats,setSelectedSeats]=useState([])
    const [loading,setLoading]=useState(false)
    const {savedBooking}=useSelector(state=>state.search)
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        dob:new Date(),
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
    const handleBookingContinue=()=>{
        setLoading(true)
        console.log(selectedSeats,formData,flid)
        // String firstName;
        // String  lastName;
        // Integer flightId;
        // String source;
        // String dest;
        // String travelDate;
        // String amount;
        // String seats;
        // String dob;


        let formValues={};
        formValues.firstName=formData.firstName
        formValues.lastName=formData.lastName
        formValues.dob=formData.dob
        formValues.seats=selectedSeats.join(',');
        formValues.flid=flid
        
        dispatch(saveBooking(formValues)).then(()=>{
            setLoading(false)
        })
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
                        <Grid container item justifyContent={'center'} key={row}>
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
                <h3>Enter Personal Information</h3>
                    <div className='inner-search-form'>
                        <Stack direction={'column'}>
                            <div>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    name='firstName'
                                    onChange={handleInputChange}
                                />
                                &nbsp;
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    name='lastName'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <br/>
                            <div>
                                    <TextField
                                        label="Date of Birth"
                                        variant="outlined"
                                        type='date'
                                        value={formData.dob}
                                        onChange={handleInputChange}
                                        name='dob'
                                    />
                                    
                            </div>
                            </Stack>
                        </div>
                    </Paper>
        )
    }

    const renderMessage=()=>{
        if(!savedBooking){
            return null;
        }
        return(
            <Alert severity={savedBooking?.messageType.toLowerCase()}>
                <AlertTitle>{savedBooking?.messageType}!</AlertTitle>
                <strong>{savedBooking?.message}!</strong>
            </Alert>
        )
    }

  return (
    <React.Fragment>
        {renderMessage()}
        <h3>Enter your info to continue booking</h3>
        {renderAirlineSeatsView()}
        {renderPersonalInfo()}
        <br/>
        <Button onClick={()=>handleBookingContinue()} variant='contained'>Book this flight</Button>
        <Backdrop open={loading}/>
        
    </React.Fragment>
  )
}

