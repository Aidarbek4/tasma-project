package com.aidarbek.tasma.exception;

public class FilmNotFoundException extends  RuntimeException{
    public FilmNotFoundException(Long id){
        super("Could not found the film with id "+id);
    }
}
