export default (to, from, next) => {
	if (localStorage.getItem("vuex") != null && localStorage.getItem("vuex").length > 0) {
		// next("/")
	} else {
		localStorage.removeItem("vuex")
		next("/signin")
	}
}
