import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTMzZTQ1N2IwMDI1ODgyOGU2YmY4YmY2YjExYTA3OCIsIm5iZiI6MTczOTk4MTIwMS43NDg5OTk4LCJzdWIiOiI2N2I2MDE5MTkwMmY1ZTIwYTY4OGQ3ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rVA1OfB85zI0phQpSMpA2In7SWZrY8yjS78oOUqvVsI'
const apiKey = '6e33e457b00258828e6bf8bf6b11a078'
const backendUrl = "https://api.themoviedb.org/3";


const axiosInstance = axios.create({
    baseURL: backendUrl,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
});

export async function fetchTrending() {
    const response = await axiosInstance.get("/trending/movie/day");
    return response.data.results;
}

export async function fetchMovieDetails(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
}

export async function querySearch(query) {
    const response = await axiosInstance.get("/search/movie", {
        params: { query },
    });
    return response.data.results;
}

export async function fetchMovieReviews(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}

export async function fetchMovieCast(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}