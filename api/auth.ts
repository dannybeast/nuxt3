interface ILoginResponse {
  result: true;
}
interface IRegisterResponse {
  result: true;
}
interface ILogin {
  login: String;
  password: String;
}
interface IRegister {
  login: String;
  password: String;
}

class AuthModule {
  private url = "/auth";
  private axios;

  constructor(axiosInstance: any) {
    this.axios = axiosInstance;
  }

  async login(data: ILogin): Promise<ILoginResponse> {
    return await this.axios.post(`${this.url}.login`, data);
  }

  async get() {
    return await this.axios.get(`https://dummyjson.com/products/1`);
  }

  async register(data: IRegister): Promise<IRegisterResponse> {
    return await this.axios.post(`${this.url}.register`, data);
  }
}

export default AuthModule;
