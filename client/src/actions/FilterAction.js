export const setGenres = genres => ({
    type: "GET_GENRES",
    genres: genres
  });

export const setProductionCompanies = productionCompanies => ({
  type: "GET_PRODUCTION_COMPANIES",
  productionCompanies: productionCompanies
})
  
  export function getGenres() {
    return dispatch => {
        fetch("http://localhost:5000/genres")
          .then(response => response.json(), error => console.log(error))
          .then(genres => {
            dispatch(setGenres(genres));
          });
      };
  }

  export function getProductionCompanies() {
    return dispatch => {
        fetch("http://localhost:5000/company")
          .then(response => response.json(), error => console.log(error))
          .then(companies => {
            dispatch(setProductionCompanies(companies));
          });
      };
  }
  
  