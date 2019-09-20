export interface User {
  userData: {
    userName: string,
    email: string
  },
  secretQuestion: string[],
  answerQuestion: string,
  gender: string[],
}