import type { $Fetch } from "ofetch";

class HttpBase {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/
  async request<T>(
    method: string,
    url: string,
    data?: object,
    extras = {}
  ): Promise<T> {
    const $res: T = await this.$fetch(url, {
      method,
      body: data,
      ...extras,
      // onResponse({ response }) {},
    });

    return $res;
  }
}

export default HttpBase;
