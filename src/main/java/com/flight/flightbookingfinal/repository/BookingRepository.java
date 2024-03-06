package com.flight.flightbookingfinal.repository;

import com.flight.flightbookingfinal.entity.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Bookings,Integer> {

}
