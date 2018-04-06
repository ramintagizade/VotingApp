export const userService = {
	login,
	logout,
	register
};

function login(email, password) {
	const opts = {
		method:"POST",
		headers: {"Content-Type": "application/json"},
		body:JSON.stringify({email,password})
	};

	return fetch('/login', opts).then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText)
		}
		return res.json(); 
	}).then( user => {
		if(user && user.token) {
			localStorage.setItem('user', JSON.stringify(user));
		}
		return user;
	})
}

function logout() {

}

function register() {

}