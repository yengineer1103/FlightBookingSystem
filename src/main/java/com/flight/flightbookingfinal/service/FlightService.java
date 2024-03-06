package com.flight.flightbookingfinal.service;

import com.flight.flightbookingfinal.entity.Flight;
import com.flight.flightbookingfinal.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class FlightService {
    @Autowired
    private FlightRepository repository;
    public void saveFlight(Flight flight){
        repository.saveAndFlush(flight);
    }
    public List<Flight> findFlightsByDate(String source,String dest, String departureDate){
        return repository.findBySourceAndDestAndDepartureDate(source,dest,departureDate);
    }
    public List<Flight> findFlights(String source,String dest){
        return repository.findBySourceAndDest(source,dest);
    }
}
