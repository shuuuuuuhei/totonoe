import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthConfig from "./json/auth_config.json"
import { useNavigate } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './AuthProvider';
import { App } from './App';

ReactDOM.render(
    <Auth0ProviderWithHistory>
        <App />
    </Auth0ProviderWithHistory>
    , document.getElementById('root')
);