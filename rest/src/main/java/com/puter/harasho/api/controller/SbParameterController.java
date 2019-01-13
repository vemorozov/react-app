package com.puter.harasho.api.controller;

import com.puter.harasho.api.model.dbo.CommitDBO;
import com.puter.harasho.api.model.dbo.ResultDBO;
import com.puter.harasho.api.model.entity.SbParameter;
import com.puter.harasho.api.model.repository.SbParameterRepository;
import com.puter.harasho.api.service.SbParameterService;
import lombok.AllArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sbParameters")
@AllArgsConstructor
public class SbParameterController {
    private SbParameterRepository repository;
    private SbParameterService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<SbParameter>> findAll() {
        var response = repository.findAll();
        if (response == null || response.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SbParameter> findById(@PathVariable Long id) {
        var response = repository.getOne(id);
        if (response == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteById(@PathVariable Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException ignored) {
        } catch (IllegalArgumentException ex) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SbParameter> save(@RequestBody SbParameter requestBody) {
        return new ResponseEntity<>(repository.save(requestBody), HttpStatus.OK);
    }

    @PostMapping(path = "/commit", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResultDBO> commit(@RequestBody CommitDBO commit) {
        return new ResponseEntity<>(service.doCommit(commit), HttpStatus.OK);
    }
}
