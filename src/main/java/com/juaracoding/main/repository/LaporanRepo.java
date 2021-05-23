package com.juaracoding.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.juaracoding.main.entity.Laporan;


public interface LaporanRepo extends JpaRepository<Laporan, Long>{

	@Query(value ="SELECT * FROM laporan WHERE name= ?1",nativeQuery = true)
	List<Laporan> findAllByUsername(String name);	
}
