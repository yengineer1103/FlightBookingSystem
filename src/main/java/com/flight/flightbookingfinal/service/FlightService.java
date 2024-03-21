package com.flight.flightbookingfinal.service;

import com.flight.flightbookingfinal.entity.Flights;
import com.flight.flightbookingfinal.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {
    @Autowired
    private FlightRepository repository;

    public void saveFlight(Flights flight) {
        repository.saveAndFlush(flight);
    }

    public List<Flights> findFlightsByDate(String source, String dest, String departureDate) {
        return repository.findBySourceAndDestAndDepartureDate(source, dest, departureDate);
    }

    public List<Flights> findFlightsBetween(String source, String dest) {
        return repository.findByDepartureDateBetween(source, dest);
    }

    public List<Flights> findFlights(String source, String dest) {

        return repository.findBySourceAndDest(source, dest);
    }

    public Flights findFLightById(int flid) {
        return repository.findByFlid(flid);
    }
}