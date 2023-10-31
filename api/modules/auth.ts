import HttpFactory from "../factory";
// interface ILoginResponse {
//   result: true;
// }
// interface IRegisterResponse {
//   result: true;
// }
// interface ILogin {
//   login: String;
//   password: String;
// }
// interface IRegister {
//   login: String;
//   password: String;
// }
class AuthModule extends HttpFactory {
  private url = "/auth";

  // constructor(axiosInstance: any) {
  //   this.axios = axiosInstance;
  // }

  // async login(data: ILogin): Promise<ILoginResponse> {
  //   return await this.axios.post(`${this.url}.login`, data);
  // }

  async getData() {
    return await this.call("GET", `https://dummyjson.com/products/1`);
  }

  // async register(data: IRegister): Promise<IRegisterResponse> {
  //   return await this.axios.post(`${this.url}.register`, data);
  // }
}

export default AuthModule;
