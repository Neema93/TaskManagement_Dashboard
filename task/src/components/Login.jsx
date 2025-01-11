import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authentication";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });
      const isLoggedIn = useSelector((state) => state.authentication.isAuthenticated);
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(credentials));
      }
      useEffect(() => {
        if (isLoggedIn) {
          navigate("/dashboard");
        }
      }, [isLoggedIn]);
    
    return(
        <>
            <form onSubmit={handleSubmit}>
            <label> UserName</label>
            <input type="text" 
                name="username"
                value={credentials.username}
                onChange={handleChange}/>
            <label> Password </label>
            <input type="password" 
                name="password" 
                value={credentials.password}
                onChange={handleChange}/>
            <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;