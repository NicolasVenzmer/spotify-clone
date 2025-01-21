import React, { createContext, useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const savedSession = localStorage.getItem('session');
        if (savedSession) {
            setSession(JSON.parse(savedSession));
        }
    }, []);

    const saveSession = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`,
                },
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch user info: ${response.statusText}`);
            }
            const userInfo = await response.json();
            const sessionData = { jwt: tokenResponse.access_token, userInfo };
            localStorage.setItem('session', JSON.stringify(sessionData));
            setSession(sessionData);
        },
    });

    const logOut = async () => {
        localStorage.removeItem('session');
        setSession(null);
        googleLogout();
    };

    return (
        <SessionContext.Provider value={{ session, saveSession, logOut }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionContextProvider;
