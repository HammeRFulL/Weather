package com.java.angular.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.java.angular.model.Weather;

@RestController
public class RestWebController {
	
	List<Weather> weathe = new ArrayList<Weather>();
	
	@RequestMapping(value = "/getallweather", method = RequestMethod.GET)
	public List<Weather> getResource(){
			return weathe;
	}
	
	@RequestMapping(value="/postweather", method=RequestMethod.POST)
	public String postWeather(@RequestBody Weather weather){
		weathe.clear();
		weathe.add(weather);		
		return "Sucessful!";
	}
}