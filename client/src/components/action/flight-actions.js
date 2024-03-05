import flightsapi from "../api/flightsapi";

export const searchFlights=(info)=>async(dispatch)=>{
    try{
        const response=await flightsapi.get(`/findFlights/${info.source}/${info.dest}/${info.departureDate}`)
        if(response && response.status===200){
            console.log("Success")
        }
    }
    catch(error){
        console.log(error)
    }
}