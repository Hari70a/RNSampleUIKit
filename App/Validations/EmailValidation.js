import { emailPattern } from "./Patterns";
import { trimText } from "./TrimmedTxt";

const isEmailValid = email => emailPattern.test(trimText(email));

export { isEmailValid };
