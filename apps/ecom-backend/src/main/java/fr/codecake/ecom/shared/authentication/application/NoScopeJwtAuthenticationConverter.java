package fr.codecake.ecom.shared.authentication.application;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

import java.util.Collections;

public class NoScopeJwtAuthenticationConverter
        implements Converter<Jwt, AbstractAuthenticationToken> {
    @Override
    public AbstractAuthenticationToken convert(Jwt jwt) {
        System.out.println("NoScopeJwtAuthenticationConverter used for JWT: " + jwt.getSubject());
        return new JwtAuthenticationToken(jwt, Collections.emptyList());
    }
}
