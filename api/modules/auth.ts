import HttpBase from "../HttpBase";
import * as Auth from "@/types/auth";

class AuthModule extends HttpBase {
  protected readonly endpoint = "/auth";

  async login(data: Auth.ILogin): Promise<Auth.ILoginResponse> {
    return await this.request<Auth.ILoginResponse>(
      "POST",
      `${this.endpoint}/login`,
      data
    );
  }

  async getData() {
    return await this.request("GET", `${this.endpoint}/getData`);
  }

  async register(data: Auth.IRegister): Promise<Auth.IRegisterResponse> {
    return await this.request<Auth.IRegisterResponse>(
      "POST",
      `${this.endpoint}/register`,
      data
    );
  }
}

export default AuthModule;
