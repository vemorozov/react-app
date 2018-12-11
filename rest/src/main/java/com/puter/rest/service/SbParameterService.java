package com.puter.rest.service;

import com.puter.rest.entity.SbParameter;
import com.puter.rest.model.dbo.CommitDBO;
import com.puter.rest.model.dbo.ResultDBO;
import com.puter.rest.repository.SbParameterRepository;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SbParameterService {
    private SbParameterRepository repository;

    @java.beans.ConstructorProperties({"repository"})
    public SbParameterService(SbParameterRepository repository) {
        this.repository = repository;
    }

    public ResultDBO doCommit(CommitDBO commit) {
        var result = new ResultDBO();
        List<SbParameter> post = commit.getPost();
        List<Long> delete = commit.getDelete();

        for (SbParameter sbParameter : post) {
            repository.save(sbParameter);
        }

        for (Long id : delete) {
            try {
                repository.deleteById(id);
            } catch (EmptyResultDataAccessException ignored){
            } catch (IllegalArgumentException ex) {
                result.setMessage(ex.getMessage());
                result.setSuccess(false);
            }
        }

        return result;
    }
}
