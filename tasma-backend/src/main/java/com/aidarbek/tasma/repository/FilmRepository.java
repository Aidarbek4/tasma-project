package com.aidarbek.tasma.repository;

import com.aidarbek.tasma.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Long> {

}
