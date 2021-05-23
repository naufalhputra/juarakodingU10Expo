package com.juaracoding.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juaracoding.main.repository.LaporanRepo;
import com.juaracoding.main.entity.Laporan;

@RestController
@RequestMapping("/Laporan")

public class LaporanPage {


	@Autowired
	LaporanRepo laporanRepo;
	
	// private final String UPLOAD_DIR = "./src/main/resources/static/uploads/";
	
	
	@GetMapping("/")
	public List<Laporan> getAll(){
		return (List<Laporan>) laporanRepo.findAll();		
	}
	
	@PostMapping("/addLaporan/")
	public String addLaporan(@RequestBody Laporan laporan) {
		laporanRepo.save(laporan);
		return"Laporan Anda berhasil disimpan";
	}
		
	@GetMapping("/Cari/{name}")
	public List<Laporan> getAllByUsername(@PathVariable String name){
		return (List<Laporan>) laporanRepo.findAllByUsername(name);
	}
}

