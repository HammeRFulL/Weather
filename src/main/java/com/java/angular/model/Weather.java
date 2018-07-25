package com.java.angular.model;

public class Weather {
	private String city;
	private String country;
	private double lat;
	private double lon;
	private double grade;
	private double wind;
	
	public Weather(){}
	
	public Weather(String city, String country, double lat, 
			double lon, double grade, double wind){
		this.city = city;
		this.country = country;
		this.lat = lat;
		this.lon = lon;
		this.grade = grade;
		this.wind = wind;
	}
	
	// Ciudad
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	// Pais
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	// Latitud
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	
	// Longuitud
	public double getLon() {
		return lon;
	}
	public void setLon(double lon) {
		this.lon = lon;
	}
	
	// Temperatura
	public double getGrade() {
		return grade;
	}
	public void setGrade(double grade) {
		this.grade = grade;
	}
	
	// Viento
	public double getWind() {
		return wind;
	}
	public void setWind(double wind) {
		this.wind = wind;
	}
	
}