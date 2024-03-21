package com.flight.flightbookingfinal.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "flights")
public class Flights {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer flid;

    @Column(name = "source_location")
    private String source;
    @Column(name = "dest_location")
    private String dest;
    @Column(name = "date")
    private String departureDate;
    @Column(name = "departure_time")
    private String departureTime;
    @Column(name = "price")
    private String price;
    @Column(name = "aircraft")
    private String aircraft;



    public Integer getFlid(){
        return flid;
    }
    public void setFlid(Integer flid){
        this.flid=flid;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDest() {
        return dest;
    }

    public void setDest(String dest) {
        this.dest = dest;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getAircraft() {
        return aircraft;
    }

    public void setAircraft(String aircraft) {
        this.aircraft = aircraft;
    }

}
