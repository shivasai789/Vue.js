import axios from 'axios';

let timer;

export default {
  async login(context, payload) {
    try {
      const { data } = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEZF4DDTtTYcmsyYlOciksW1VhMVRV9s8',
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }
      );

      // const expiresIn = +data.expiresIn * 1000;
      const expiresIn = 5000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', {
        token: data.idToken,
        userId: data.localId,
        tokenExpiration: expirationDate,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error.response?.data?.error?.message || 'Login failed');
    }
  },
  async signup(context, payload) {
    try {
      const { data } = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEZF4DDTtTYcmsyYlOciksW1VhMVRV9s8',
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }
      );

      // const expiresIn = +data.expiresIn * 1000;
      const expiresIn = 5000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', {
        token: data.idToken,
        userId: data.localId,
        tokenExpiration: expirationDate,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error.response?.data?.error?.message || 'Signup failed');
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration,
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearInterval(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('didLogout');
  },
};
