export interface ApiPayload<P, Q, B> {
  param: P;

  query: Q;

  body: B;

  accessToken: string;
}
