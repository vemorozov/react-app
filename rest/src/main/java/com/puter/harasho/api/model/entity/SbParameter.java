package com.puter.harasho.api.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Setter @Getter @Entity
@Table(name = "SB_PARAMETER")
public class SbParameter implements Serializable {
    @Id
    @Column(name = "ID")
    @GeneratedValue(generator = "SB_PARAM_ID_SEQ")
    private Long id;

    @Column(name = "CODE")
    private String code;

    @Column(name = "DESCRIPTION")
    private String description;

//        @Column(name = "MULTIPLE_VALUES")
//    private Boolean multipleValueAvailable;
//
//    @Column(name = "IS_FLAG")
//    private Boolean isFlag;

//    @OneToMany(targetEntity = SbParameterValue.class, cascade = CascadeType.ALL)
//    @JoinColumn(name = "SB_PARAMETER_CODE", referencedColumnName = "CODE")
//    private List<SbParameterValue> values;
}
