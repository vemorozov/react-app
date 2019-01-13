package com.puter.harasho.api.service;

import com.puter.harasho.api.model.dbo.CommitDBO;
import com.puter.harasho.api.model.dbo.ResultDBO;
import com.puter.harasho.api.model.entity.SbParameter;
import com.puter.harasho.api.model.repository.SbParameterRepository;
import lombok.AllArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service @AllArgsConstructor
public class SbParameterService {
    private SbParameterRepository repository;

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
            } catch (EmptyResultDataAccessException ignored) {
            } catch (IllegalArgumentException ex) {
                result.setMessage(ex.getMessage());
                result.setSuccess(false);
            }
        }

        return result;
    }
}
