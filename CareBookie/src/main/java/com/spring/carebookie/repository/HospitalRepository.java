package com.spring.carebookie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.carebookie.entity.HospitalEntity;
import com.spring.carebookie.repository.projection.HospitalGetAllProjection;
import com.spring.carebookie.repository.sql.HospitalSql;

public interface HospitalRepository extends JpaRepository<HospitalEntity, Long> {

    @Query(value = HospitalSql.GET_ALL_HOSPITAL, nativeQuery = true)
    List<HospitalGetAllProjection> getAllHospital();
}
