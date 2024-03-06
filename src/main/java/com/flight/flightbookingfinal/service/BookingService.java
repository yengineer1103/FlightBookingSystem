package com.flight.flightbookingfinal.service;

import com.flight.flightbookingfinal.entity.Bookings;
import com.flight.flightbookingfinal.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingRepository repository;

    public void saveBooking(Bookings booking){
        repository.saveAndFlush(booking);
    }
}
