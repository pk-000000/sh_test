
import http from '..';
import { SignUpRequest } from './requests';

const HOST = 'http://localhost:5005';

export const requestSignUp = async (data: SignUpRequest): Promise<void> => {
    http.post(`${HOST}/v1/users/sign-up`, data);
}