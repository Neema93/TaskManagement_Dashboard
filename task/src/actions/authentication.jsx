
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  export const logout = () => ({
    type: 'LOGOUT',
  });
  export const login = (credentials) => {
    return async (dispatch) => {
        
        try {
           const user ={
                username: "abc",
                password: "123"
            }
            const error = "Username and Password dose not match"
            //const response = await axios.get(`http://localhost:9000/users/${credentials.username}`);
            //if ( response.status === 200 && response.data.user_username === credentials.username && response.data.user_password === credentials.password) {
             if(user.username === credentials.username && user.password === credentials.password)  {
                    dispatch(loginSuccess(user));
               
            } else {
                dispatch(loginFailure(error));
            }
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};