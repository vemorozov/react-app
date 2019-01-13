package com.puter.harasho.security.config;

import com.puter.harasho.security.JwtTokenFilterConfigurer;
import com.puter.harasho.security.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@Profile("jwt")
@AllArgsConstructor
public class JwtConfig extends SecurityConfig {
    //    private TokenAuthenticationManager tokenAuthenticationManager;
//    private GetTokenService tokenService;
    private JwtTokenProvider jwtTokenProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/login").permitAll()
            .anyRequest().authenticated()
//            .headers().frameOptions().sameOrigin()
//            .and()
//            .addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
//            .and()
//            .rememberMe()
//            .and()
//            .formLogin()
//            .and()
//            .logout()
        ;

        http.apply(new JwtTokenFilterConfigurer(jwtTokenProvider));
    }

//    @Bean(name = "tokenAuthenticationFilter")
//    public TokenAuthenticationFilter tokenAuthenticationFilter() {
//        var tokenAuthenticationFilter = new TokenAuthenticationFilter();
//        tokenService.setUserDetailsService(userDetailsService());
//        tokenAuthenticationManager.setUserDetailsService(userDetailsService());
//        tokenAuthenticationManager.setTokenService(tokenService);
//        tokenAuthenticationFilter.setAuthenticationManager(tokenAuthenticationManager);
//        return tokenAuthenticationFilter;
//    }

    @Bean

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}
