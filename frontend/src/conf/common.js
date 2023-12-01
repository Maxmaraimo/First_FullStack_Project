
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

function isLoggedIn() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token !== null;
}

function logoutEntirely() {
    localStorage.clear()
}

export {
    logoutEntirely,
    isLoggedIn,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}
