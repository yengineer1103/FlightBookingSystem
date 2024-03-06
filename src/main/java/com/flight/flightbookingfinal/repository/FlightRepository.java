package com.flight.flightbookingfinal.repository;

import com.flight.flightbookingfinal.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Integer> {

}
