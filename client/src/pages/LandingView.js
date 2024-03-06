import React, { useState } from 'react'
import { Stack,FormControl,RadioGroup,FormControlLabel,Radio, Paper, TextField, Button, Container,Box } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux';
import { searchFlights } from '../components/action/flight-actions';

export default function LandingView(props) {
    const{searchResults}=useSelector(state=>state.search)
    const [formData,setFormData]=useState({
        source:"",
        dest:"",
        departureDate:new Date(),
        returnDate:new Date(),
        travellers:""
    })

    const handleInputChange=event=>{
        const {name,value}=event.target;
        setFormData(prevData=>({
            ...prevData,[name]:value
        }))
    }
    const dispatch=useDispatch();

    const handleSearch=()=>{

        const info={};
        info.source=formData.source
        info.dest=formData.dest
        info.departureDate=formData.departureDate

        dispatch(searchFlights(info)).then(resp=>{
            console.log("Success")
        })
    }
    console.log(searchResults);

    const handleDataDisplay=()=>{
        if(!searchResults){
            return null
        }
        return(
            searchResults?.responseData.map((flight,index)=>(
                <>
                <Paper key={index} elevation={3}>
                    <div style={{padding:'10px'}}>
                        <div>Time: {flight.departureTime}</div>
                        <div>Price: {flight.price}</div>
                        <div>Aircraft: {flight.aircraft}</div>
                    </div>
                    <div><Button variant='outlined'>Book</Button></div><br/>
                </Paper>
                <br/>
                </>
            ))
        )
    }

  return (
    
    <div>
        <Stack direction='column' justifyContent='center'> 
            <Container maxWidth='sm'>
                <form>
                <Paper elevation={6}>
                    <div className='inner-search-form'>
                        <h3>Search here to find flights</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="oneWay"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                                    <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                                </RadioGroup>
                            </FormControl>
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
                                        label="Date"
                                        variant="outlined"
                                        type='date'
                                        value={formData.departureDate}
                                        onChange={handleInputChange}
                                        name='departureDate'
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Return Date"
                                        variant="outlined"
                                        type='date'
                                        value={formData.returnDate}
                                        onChange={handleInputChange}
                                        name='returnDate'
                                    />
                                    &nbsp;
                                    <TextField
                                        label="No. of travellers"
                                        variant="outlined"
                                        name='travellers'
                                        onChange={handleInputChange}
                                    />
                                </Stack>
                            </div>
                            <br/>
                            <div>
                                <Button size='large' onClick={()=>handleSearch()} color='success' variant='contained'>Search</Button>
                            </div>
                        </div>
                    </Paper>
                    </form>
                </Container>
            <div>
                <br/><br/><br/>
                <Stack direction={'column'} justifyContent={'center'} spacing={3}>
                    <Container maxWidth='xl'>
                        {handleDataDisplay()}
                    </Container>

                </Stack>
                <Stack direction={'column'} justifyContent={'center'}>
                    <Container maxWidth='xl'>
                        <Paper elevation={6}>
                            <h3>Recommendations</h3>
                                <div style={{padding:'10px'}}>
                                    <Stack direction={'row'} justifyContent={'center'} spacing={3}>
                                        <Box
                                            sx={{
                                            width: 200,
                                            height: 200,
                                            border:'solid 2px orange'
                                            }}
                                        />
                                        <Box
                                            sx={{
                                            width: 200,
                                            height: 200,
                                            border:'solid 2px orange'
                                            }}
                                        />
                                        <Box
                                            sx={{
                                            width: 200,
                                            height: 200,
                                            border:'solid 2px orange'
                                            }}
                                        />
                                        <Box
                                            sx={{
                                            width: 200,
                                            height: 200,
                                            border:'solid 2px orange'
                                            }}
                                        />
                                    </Stack>
                                    <br/>
                                </div>
                        </Paper>
                    </Container>
                </Stack>
            </div>
        </Stack>
    </div>
  )
}
