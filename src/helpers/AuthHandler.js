export const isLogged = () => {
    let token =localStorage.getItem('token')
    return (token) ? true : false;
};

export const doLogin = (token) => {
    localStorage.setItem('token', token);
};

export const doLogout = () => {
    localStorage.removeItem('token');
}

