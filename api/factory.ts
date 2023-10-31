import type { $Fetch } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/
  async call<T>(
    method: string,
    url: string,
    data?: object,
    extras = {},
  ): Promise<T | undefined> {
    try {
      const $res: T = await this.$fetch(url, { method, body: data, ...extras });
      return $res;
    } catch (err) {
      console.log(err);
    }
  }
}

export default HttpFactory;
