/**
 * validate email
 * @param {*} email
 * @returns
 */
export const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

/**
 * validate password
 * Contain at least 8 characters,
 * contain at least 1 number,
 * contain at least 1 lowercase character (a-z),
 * contain at least 1 uppercase character (A-Z)
 * contain at least 1 !@#$&*
 * @param {*} password
 * @returns
 */
export const validatePassword = (password) => {
	return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])[0-9a-zA-Z!@#$&*]{8,}$/);
};
