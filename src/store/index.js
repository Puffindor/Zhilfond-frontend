import { createStore } from "vuex";

export default createStore({
 state: {
  selectedUser: null,
  users: null,
  loading: false,
 },

 getters: {
  getLoadingState(state) {
   return state.loading;
  },

  getSelectedUser(state) {
   return state.selectedUser;
  },
  getUsers(state) {
   return state.users;
  },
 },
 actions: {
  selectUser(context, payload) {
   context.commit("selectUser", payload);
  },
  async getUsers(context) {
   this.state.loading = true;
   fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
     if (response.ok) {
      return response.json();
     } else {
      alert("Faild to load data");
     }
    })
    .then(function (data) {
     if (data) {
      context.commit("setUsers", data);
     }
    })
    .catch((error) => {
     alert(`Server Error: ${error}`);
    });
   this.state.loading = false;
  },
 },
 mutations: {
  selectUser(state, payload) {
   state.selectedUser = payload;
  },
  setUsers(state, payload) {
   state.users = payload;
  },
 },
});
