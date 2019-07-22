import Vue from "vue"

export default {
  namespaced: true,
  state:{
    email: '',
    password: '',
  },
  getters:{
    email: state => {
      return state.email
    },
    password: state => {
      return state.password
    }
  },
  mutations:{
    updateEmail (state, email) {
      state.email = email
    },
    updatePassword (state, password) {
      state.password = password
    }
  },
  actions:{
    login(context){
      Vue.http.post('https://stagingapi.whynot.earth/api/v0/authentication/login', {
        email: context.state.email,
        password: context.state.password
      }).then(function(data){
          console.log(data);
      });
    },
    register(context){
      Vue.http.post('https://stagingapi.whynot.earth/api/v0/authentication/register', {
        email: context.state.email,
        password: context.state.password
      }).then(function(data){
          console.log(data);
      });
    }
  },
}