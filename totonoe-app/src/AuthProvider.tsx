import React, { ReactNode } from 'react'
import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithHistory = ({ children }: {
    children: ReactNode
}) => {
    const onRedirectCallback = (appState: any) => {
        window.history.replaceState(
            {},
            document.title,
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    };

    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};