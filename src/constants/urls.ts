const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie';
const genre = '/genre';

const urls = {
    movies: {
        all: `/discover${movie}`,
        byId: (movieId: string) => `${movie}/${movieId}`,
        search: `search${movie}`,
        topRated: `${movie}/top_rated`,
        upcoming: `${movie}/upcoming`
    },
    genresList: `${genre}${movie}/list`,
    image: (width: string, img: string) => `https://image.tmdb.org/t/p/${width}/${img}`,
    video: {
        trailers: (userId: string) => `${movie}/${userId}/videos`,
        youTube: (key: string) => `https://www.youtube-nocookie.com/embed/${key}`
    }
}

export { baseURL, urls }