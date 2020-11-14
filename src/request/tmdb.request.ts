import { RequestService } from './request.service';
import { CustomErrorHandler } from '../exception/error-handler';
import { APP_CONSTANTS } from '../constants/app.constants';
import { MovieDetailsRespose, MovieResponse } from "../models/movie.model";

const baseUrl = 'https://api.themoviedb.org/3';
export class TmdbRequest {
    private requestService: RequestService;

    constructor() {
        this.requestService = new RequestService();
    }

    public async fetchNowPlaying(): Promise<MovieResponse> {

        const url = `${baseUrl}/movie/now_playing?api_key=${APP_CONSTANTS.tmdbKey}&language=en-US&region=in&spage=1`;

        return this.requestService.get(url);
    }

    public fetchMovies(date: string, language: string, page: number): Promise<MovieResponse> {

        const url = `${baseUrl}/discover/movie?api_key=${APP_CONSTANTS.tmdbKey}&language=en-US&region=in&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=${page}&release_date.lte=${date}&with_original_language=${language}`;

        return this.requestService.get(url);
    }

    public searchMovies(searchText: string, page: number = 1): Promise<MovieResponse> {
        const url = `${baseUrl}/search/movie?api_key=${APP_CONSTANTS.tmdbKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false&region=in`;

        return this.requestService.get(url);
    }

    public fetchMovieDetails(movieId: number, appendToResponse: string): Promise<MovieDetailsRespose> {
        const url = `${baseUrl}/movie/${movieId}?api_key=${APP_CONSTANTS.tmdbKey}&language=en-US&append_to_response=${appendToResponse}`;

        return this.requestService.get(url);
    }
}
