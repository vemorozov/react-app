package com.puter.rest.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
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
}
