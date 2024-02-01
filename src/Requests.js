const key = '04b25610423cce1aa94c0498b054e5d6'

const requests = {

    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending :  `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`

}

export default requests