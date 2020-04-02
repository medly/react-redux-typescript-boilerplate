/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AxiosReturn {
    response?: AxiosResponse<any>;
    error?: AxiosResponse<any>;
}

export async function fetch(config: AxiosRequestConfig): Promise<AxiosReturn> {
    try {
        const request = {
            ...config,
            headers: {
                ...(config.headers ? config.headers : {})
            }
        };
        const response = await axios(request);
        return { response: { ...(response || { config, status: 500, data: '', headers: '', statusText: '' }) } };
    } catch (error) {
        return { error: { ...(error.response || { status: 500, data: error, variant: 'error' }) } };
    }
}
