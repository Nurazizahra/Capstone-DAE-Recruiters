const Login = {
    async render() {
        return `
         <div class="login-form-container">
          <h2>Login</h2>
          <form class="login-form">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password">
            <button type="submit" class="submit-button">Login</button>
          </form>
          <p>Don’t have an account yet? <a href="#/registrasi">Create Account</a></p>
        </div>
      `;
    },
};

export default Login;
