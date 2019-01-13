package com.puter.harasho.api.model.dbo;

import com.puter.harasho.api.model.entity.SbParameter;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter @Getter public class CommitDBO {
    private List<SbParameter> post;
    private List<Long> delete;
}
