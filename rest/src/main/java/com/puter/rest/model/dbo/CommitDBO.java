package com.puter.rest.model.dbo;

import com.puter.rest.entity.SbParameter;

import java.util.List;

public class CommitDBO {
    private List<SbParameter> post;
    private List<Long> delete;

    public List<SbParameter> getPost() {
        return this.post;
    }

    public List<Long> getDelete() {
        return this.delete;
    }

    public void setPost(List<SbParameter> post) {
        this.post = post;
    }

    public void setDelete(List<Long> delete) {
        this.delete = delete;
    }
}
