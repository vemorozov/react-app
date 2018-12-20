package com.puter.rest.security;

import org.springframework.boot.actuate.audit.listener.AuditApplicationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;

@Component
public class LoginAttemptsLogger {

    @EventListener
    public void auditEventHappened(AuditApplicationEvent auditApplicationEvent) {

        var auditEvent = auditApplicationEvent.getAuditEvent();
        System.out.println("Principal " + auditEvent.getPrincipal() + " - " + auditEvent.getType());

        var details = (WebAuthenticationDetails) auditEvent.getData().get("details");
        System.out.println("Remote IP address: " + details.getRemoteAddress());
        System.out.println("  Session Id: " + details.getSessionId());
    }
}
