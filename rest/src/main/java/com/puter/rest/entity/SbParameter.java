package com.puter.rest.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
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

    public Long getId() {
        return this.id;
    }

    public String getCode() {
        return this.code;
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

    public void setDescription(String description) {
        this.description = description;
    }

//    @Column(name = "MULTIPLE_VALUES")
//    private Boolean multipleValueAvailable;
//
//    @Column(name = "IS_FLAG")
//    private Boolean isFlag;

//    @OneToMany(targetEntity = SbParameterValue.class, cascade = CascadeType.ALL)
//    @JoinColumn(name = "SB_PARAMETER_CODE", referencedColumnName = "CODE")
//    private List<SbParameterValue> values;
}
