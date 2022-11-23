function verifyPassword(password) {
  return !password ||
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password)
    ? "Password rejected"
    : "Password accepted";
}

module.exports = verifyPassword;
