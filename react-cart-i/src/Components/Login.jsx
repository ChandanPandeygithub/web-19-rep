function Login() {
  const handalClick = () => {
    alert(" SUCCESSFUL");
  };

  return (
    <div className="login-page">
      <input type="text" name="" id="" placeholder="enter your email" />
      <input type="password" name="" id="" placeholder="enter your password" />
      <button onClick={handalClick}>click to login</button>
    </div>
  );
}

export default Login;
