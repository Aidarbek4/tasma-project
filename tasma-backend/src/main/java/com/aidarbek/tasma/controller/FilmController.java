package com.aidarbek.tasma.controller;

import com.aidarbek.tasma.exception.FilmNotFoundException;
import com.aidarbek.tasma.model.Film;
import com.aidarbek.tasma.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin("http://localhost:3000")
public class FilmController {
    @Autowired
    private FilmRepository filmRepository;

    @PostMapping("/film")
    Film newFilm(@RequestBody Film newFilm){
        return filmRepository.save(newFilm);
    }

    @GetMapping("/films")
    List<Film> getAllFilms(){
        return filmRepository.findAll();
    }

    @GetMapping("/film/{id}")
    Film getFilmById(@PathVariable Long id){
        return filmRepository.findById(id)
                .orElseThrow(()->new FilmNotFoundException(id));
    }

    @PutMapping("/film/{id}")
    Film updateFilm(@RequestBody Film newFilm, @PathVariable Long id){
        return filmRepository.findById(id)
                .map((film -> {
                    film.setTitle(newFilm.getTitle());
                    film.setDescription(newFilm.getDescription());
                    film.setDuration(newFilm.getDuration());
                    film.setGenre(newFilm.getGenre());
                    film.setLimit(newFilm.getLimit());
                    film.setYear(newFilm.getTitle());
                    film.setPosterUrl(newFilm.getPosterUrl());
                    film.setVideoUrl(newFilm.getVideoUrl());
                    return filmRepository.save(film);
                })).orElseThrow(()->new FilmNotFoundException((id)));
    }

    @DeleteMapping("film/{id}")
    String deleteFilm(@PathVariable Long id){
        if(!filmRepository.existsById(id)){
            throw new FilmNotFoundException(id);
        }
        filmRepository.deleteById(id);
        return "User with id "+id+" has been deleted";
    }

    @GetMapping("/random-film")
    Film getRandomFilm() {
        List<Film> allFilms = filmRepository.findAll();

        Random random = new Random();
        int randomIndex = random.nextInt(allFilms.size());

        return allFilms.get(randomIndex);
    }
}
