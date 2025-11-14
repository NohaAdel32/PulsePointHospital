
export const Register = (state,action) => {
        state.user = action.payload;
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(action.payload));
}
export const login = (state,action) => {
    state.user = action.payload;
    const dataUser = JSON.parse(localStorage.getItem("user"));
    if(dataUser && dataUser.email===state.user.email && dataUser.password===state.user.password){
        state.isAuthenticated = true
        state.error = null;
    }else{
        state.isAuthenticated = false;
        state.error = "Email or password is incorrect!";
    }

}

export const logout = (state) => {
    state.isAuthenticated = false
    state.user = null;
    localStorage.removeItem("isAuthenticated");
    // localStorage.removeItem("user");
}