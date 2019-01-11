const emailPattern = /[a-z0-9_+]+@[[a-z]+\.[a-z]{2,3}$/;
const pwdPolicyPattern = /((?=.*[a-z])(?=.*[A-Z]).{8,20})/;
export { emailPattern, pwdPolicyPattern };
