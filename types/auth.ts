export interface ILoginResponse {
  auth: {
    access_token: string;
    refresh_expires_in: number;
  };
}
export interface IRegisterResponse {
  result: true;
}
export interface ILogin {
  login: String;
  password: String;
}
export interface IRegister {
  login: String;
  password: String;
}
