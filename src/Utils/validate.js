const validate = (email, password) => {
  const checkemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const checkpassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!checkemail) return "Email not Valid";
  if (!checkpassword) return "Password not Valid";
  return null;
};
export default validate;
