const signup = (req, res) => {
  res.send("Signup");
};

const login = (req, res) => {
  res.send("Log in");
};

const logout = (req, res) => {
  res.send("Log out");
};

export { signup, login, logout };
