package com.puter.rest.model.dbo;

public class ResultDBO {
    private String message;
    private Boolean success;

    public String getMessage() {
        return this.message;
    }

    public Boolean getSuccess() {
        return this.success;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }
}
