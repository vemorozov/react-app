package com.puter.rest.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "SB_PARAMETER")
public class SbParameter implements Serializable {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "CODE")
    private String code;

    @Column(name = "DESCRIPTION")
    private String description;

//    @Column(name = "MULTIPLE_VALUES")
//    private Boolean multipleValueAvailable;
//
//    @Column(name = "IS_FLAG")
//    private Boolean isFlag;

//    @OneToMany(targetEntity = SbParameterValue.class, cascade = CascadeType.ALL)
//    @JoinColumn(name = "SB_PARAMETER_CODE", referencedColumnName = "CODE")
//    private List<SbParameterValue> values;
}
