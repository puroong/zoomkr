import axios from '../../common/axios';
import {
  EMPTY_BODY,
  ZOOM_AUTH_HOST,
} from '../../common/constants/core.constant';
import { stringify } from '../../common/helpers/querstring.helper';
import { REQUEST_ACCESS_TOKEN_PATH } from '../constants/oauth2.constant';
import {
  Oauth2Credential,
  RequestAccessTokenParam,
  RequestAccessTokenResponse,
} from '../interfaces/oauth2.interface';

function requestAccessTokenApiPath(param: RequestAccessTokenParam) {
  const querystring = stringify({
    code: param.code,
    redirect_uri: param.redirectUri,
    grant_type: param.grantType,
    code_verifier: param.codeVerifier,
  });
  return `${ZOOM_AUTH_HOST}${REQUEST_ACCESS_TOKEN_PATH}?${querystring}`;
}

async function requestAccessToken(
  credential: Oauth2Credential,
  param: RequestAccessTokenParam,
): Promise<RequestAccessTokenResponse> {
  const url = requestAccessTokenApiPath(param);
  try {
    const { data } = await axios.post(url, EMPTY_BODY, {
      auth: {
        username: credential.clientId,
        password: credential.clientSecret,
      },
    });

    return {
      accessToken: data.access_token,
      tokenType: data.token_type,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      scope: data.scope,
    };
  } catch (err) {
    throw err;
  }
}

export async function getAccessToken(
  credential: Oauth2Credential,
  param: RequestAccessTokenParam,
) {
  const response = await requestAccessToken(credential, param);
  return response.accessToken;
}
