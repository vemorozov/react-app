package com.puter.rest.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SB_PARAMETER_VALUE")
public class SbParameterValue {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "CODE")
    private String code;

    @Column(name = "SORT_ORDER")
    private Long sortOrder;

    @Column(name = "DESCRIPTION")
    private String description;

    public Long getId() {
        return this.id;
    }

    public String getCode() {
        return this.code;
    }

    public Long getSortOrder() {
        return this.sortOrder;
    }

    public String getDescription() {
        return this.description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
