package com.flight.flightbookingfinal.repository;

import com.flight.flightbookingfinal.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<Airport,Integer> {
    Airport findByAirportCode(String airportCode);
    Airport findByAirportName(String airportName);
}
