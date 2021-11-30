export default {
  //modules
  namespaced: '',
  state: () => ({
    movies: [],
  }),
  getters: {
    moviesId(state) {
      return state.movies.map(m => m.imdbID);
    },
  },
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    searchMovies() {},
  },
};
