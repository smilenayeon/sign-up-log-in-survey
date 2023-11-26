import React from 'react';

const SignUp:React.FC = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <label htmlFor="username"> Username</label>
        <input id="username" type="text" name="username" required/>

        <label htmlFor="email"> Email</label>
        <input id="email" type="email" name="email" required/>

        <label htmlFor="password"> Password</label>
        <input id="password" type="password" name="password" required/>

        <input type="submit" value="Sign up"/>



      </form>
    </div>
  )
}

export default SignUp
