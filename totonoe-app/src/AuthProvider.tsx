import React, { ReactNode } from 'react'
import { Auth0Provider } from '@auth0/auth0-react';
import AuthConfig from "./json/auth_config.json"

export const Auth0ProviderWithHistory = ({ children }: {
    children: ReactNode
  }) => {
        const onRedirectCallback = (appState: any) => {
            window.history.replaceState (
                {},
                document.title,
                appState && appState.targetUrl
                    ? appState.targetUrl
                    : window.location.pathname
            );
        };
  
    return (
        <Auth0Provider
            domain={AuthConfig.domain}
            clientId={AuthConfig.clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
  };