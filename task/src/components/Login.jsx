import { useState } from "react";
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials)
      }
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