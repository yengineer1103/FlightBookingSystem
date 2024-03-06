package com.flight.flightbookingfinal.repository;

import com.flight.flightbookingfinal.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Integer> {
    List<Flight> findBySourceAndDestAndDepartureDate(String source,String dest, String departureDate);

}
