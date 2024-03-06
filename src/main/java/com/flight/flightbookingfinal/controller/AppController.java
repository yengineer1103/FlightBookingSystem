package com.flight.flightbookingfinal.controller;

import com.flight.flightbookingfinal.entity.Flight;
import com.flight.flightbookingfinal.response.ObjectResponse;
import com.flight.flightbookingfinal.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class AppController {
    @Autowired
    private FlightService flightService;
    @GetMapping("/findFlights/{source}/{dest}/{departureDate}")
    private ResponseEntity<ObjectResponse> findFlights(@PathVariable String source, @PathVariable String dest, @PathVariable String departureDate){
        ObjectResponse response=new ObjectResponse();
        try{
//            List<Flight> flights=flightService.findFlightsByDate(source,dest,departureDate);
            List<Flight> flights=flightService.findFlights(source,dest);
            response.setResponseData(flights);
            response.setStatusCode(HttpStatus.OK);
            response.setMessageType("SUCCESS");
        }
        catch (Exception e){
            response.setStatusCode(HttpStatus.BAD_REQUEST);
            response.setMessage("Error occured on the server");
            response.setMessageType("ERROR");
            e.printStackTrace();
        }
        return new ResponseEntity<ObjectResponse>(response,response.getStatusCode());
    }
}
