export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if an user is authenticated
    if (isAuthenticated() === false) {
      return navigateTo('/login')
    }
  })
  

  const isAuthenticated = ()=>{
    // get Token from local Storage
    // perika ke server jika terverifikasi login maka true
    // refressh token
    // jika gagal maka false
    return true;
  }