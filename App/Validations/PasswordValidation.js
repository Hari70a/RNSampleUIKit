import { pwdPolicyPattern } from "./Patterns";

const isFollowsPwdPolicy = pwd => pwdPolicyPattern.test(pwd);

export { isFollowsPwdPolicy };
