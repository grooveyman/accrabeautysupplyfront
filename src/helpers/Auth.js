export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("tokenExpiry");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

// export const isTokenExpired = () => {
//     const expiryDate = localStorage.getItem("tokenExpiry");
//     if (!expiryDate) return true; // Token not found or expired
  
//     const currentTime = new Date();
//     const expiryTime = new Date(expiryDate);
  
//     return currentTime >= expiryTime;
//   };
  

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

// export function checkAuthLoader() {
//   const token = getAuthToken();

//   if (!token) {
//     //should open login modal
//   }
// }

//   export function logOut() {
//     logoutHandler()
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('expiration');
//     return redirect('/');
//   }
//for the logout button
