const _appCode = 'MAC';
export const BaseLocalStorage = {
	/**
	 * Set value into localDtorage
	 * @param {} key
	 * @param {*} value
	 */
	Set: (key, value) => {
		localStorage.setItem(`${_appCode}_${key}`, value);
	},
	/**
	 * get value into localDtorage
	 * @param {} key
	 * @param {*} value
	 */
	Get: (key, value) => {
		return localStorage.getItem(`${_appCode}_${key}`);
	},
};
