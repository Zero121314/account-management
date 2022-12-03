import * as request from '@/base/utilities/axios/httpRequest';

const controllerPath = 'Account/';

export const accountService = {
	loggin: async (payload) => {
		return request.getAysnc(controllerPath, payload);
	},

	register: async (payload) => {
		return request.postAysnc(controllerPath, payload);
	},
};
