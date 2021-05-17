import {
  Oauth2Credential,
  RequestAccessTokenParameter,
  RequestAccessTokenResponse,
} from '../interfaces/oauth2.interface';
import { EMPTY_BODY, ZOOM_API_HOST } from '../../core/constants/core';
import { stringify } from '../../core/helpers/querstring.helper';
import axios from 'axios';

function authorizationUrl(parameter: RequestAccessTokenParameter) {
  const querystring = stringify(parameter);
  return `${ZOOM_API_HOST}${REQUEST_ACCESS_TOKEN_PATH}?${querystring}`;
}

async function requestAccessToken(
  credential: Oauth2Credential,
  parameter: RequestAccessTokenParameter,
): Promise<RequestAccessTokenResponse> {
  const url = authorizationUrl(parameter);
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
