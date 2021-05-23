package com.juaracoding.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juaracoding.main.entity.Pelapor;
import com.juaracoding.main.repository.PelaporRepo;



@RestController
@RequestMapping("/Register")
public class PelaporPage {
	@Autowired
	PelaporRepo pelaporRepo;

	@GetMapping("/")
	public List<Pelapor> getAll() {
		return pelaporRepo.findAll();
	}
	
	@PostMapping("/addReg/")
	public String addReg(@RequestBody Pelapor pelapor) {
		pelaporRepo.save(pelapor);
		return "Insert Berhasil";
	}
	
	@GetMapping("/name/{value}")
	public Pelapor getByName(@PathVariable("value") String value) {
		return pelaporRepo.findByName(value);
	}

	
}


