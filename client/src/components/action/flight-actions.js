import flightsapi from "../api/flightsapi";
import { SEARCH_FLIGHTS } from "./actionTypes";

export const searchFlights=(info)=>async(dispatch)=>{
    try{
        const response=await flightsapi.get(`/findFlights/${info.source}/${info.dest}/${info.departureDate}`)
        if(response && response.status===200){
            dispatch({type:SEARCH_FLIGHTS,payload:response.data})
        }
    }
    catch(error){
        console.log(error)
    }
}