import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthConfig from "./json/auth_config.json"

ReactDOM.render(
        <Auth0Provider 
            domain={AuthConfig.domain}
            clientId={AuthConfig.clientId}
            redirectUri={window.location.origin}
        >
        <App />
        </Auth0Provider>
        , document.getElementById('root')
    );