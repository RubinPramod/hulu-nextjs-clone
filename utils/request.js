// const API_KEY = process.env.API_KEY;
const API_KEY = '4133306cf13a5cf3c2e4da7dff3e2231';

// https://api.themoviedb.org/3/trending/all/week?api_key=4133306cf13a5cf3c2e4da7dff3e2231

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchHorror: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    }
    ,
    fetchComedy: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchAction: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchAdventure: {
        title: "Adventure",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=12`
    },
    fetchAnimation: { 
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchCrime: {
        title: "Crime",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=80`
    }
    ,
    fetchDocumentary: {
        title: "Documentary",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchDrama: {
        title: "Drama",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=18`
    },
    fetchFamily: {
        title: "Family",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`
    },
    fetchFantasy: {
        title: "Fantasy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=14`
    },
    fetchHistory: {
        title: "History",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=36`
    },
    fetchMusic: {
        title: "Music",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`
    },

    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchRomance: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchScienceFiction: {
        title: "Science Fiction",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
}