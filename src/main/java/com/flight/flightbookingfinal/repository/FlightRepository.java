package com.flight.flightbookingfinal.repository;

import com.flight.flightbookingfinal.entity.Flights;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flights,Integer> {
    List<Flights> findBySourceAndDestAndDepartureDate(String source, String dest, String departureDate);
    List<Flights> findByDepartureDateBetween(String startDate, String endDate);
    List<Flights> findBySourceAndDest(String source, String dest);
    Flights  findByFlid(Integer flid);

}
