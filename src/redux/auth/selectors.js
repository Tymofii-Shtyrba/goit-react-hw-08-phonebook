export const selectLoginStatus = state => state.auth.isLoggedIn;
export const selectUserEmail = state => state.auth.user.email;
export const selectRefreshStatus = state => state.auth.isRefreshed;