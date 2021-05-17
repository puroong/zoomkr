export interface Oauth2Credential {
  clientId: string;
  clientSecret: string;
}

export interface RequestAccessTokenParameter {
  grantType: string;
  code: string;
  redirectUri: string;
  codeVerifier?: string;
}

export interface RequestAccessTokenResponse {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  expiresIn: number;
  scope: string;
}
