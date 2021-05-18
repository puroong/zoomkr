import axios from '../../core/axios';
import { EMPTY_BODY, ZOOM_AUTH_HOST } from '../../core/constants/core.constant';
import { stringify } from '../../core/helpers/querstring.helper';
import { REQUEST_ACCESS_TOKEN_PATH } from '../constants/oauth2.constant';
import {
  Oauth2Credential,
  RequestAccessTokenParameter,
  RequestAccessTokenResponse
} from '../interfaces/oauth2.interface';

function requestAccessTokenApiPath(parameter: RequestAccessTokenParameter) {
  const querystring = stringify({
    code: parameter.code,
    redirect_uri: parameter.redirectUri,
    grant_type: parameter.grantType,
    code_verifier: parameter.codeVerifier,
  });
  return `${ZOOM_AUTH_HOST}${REQUEST_ACCESS_TOKEN_PATH}?${querystring}`;
}

async function requestAccessToken(
  credential: Oauth2Credential,
  parameter: RequestAccessTokenParameter,
): Promise<RequestAccessTokenResponse> {
  const url = requestAccessTokenApiPath(parameter);
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
  parameter: RequestAccessTokenParameter,
) {
  const response = await requestAccessToken(credential, parameter);
  return response.accessToken;
}
