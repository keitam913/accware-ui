import { Redirect, useLocation } from 'react-router-dom';
import React from 'react';

function parseIdToken(hash) {
        var url = new URL("p:?" + hash.slice(1));
        return url.searchParams.get("id_token");
}

function Callback() {
        let loc = useLocation();
        sessionStorage.setItem('idToken', parseIdToken(loc.hash));
        return <Redirect to="/" />;
}

export default Callback;
