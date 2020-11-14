import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, QueryParam, ParamOptions } from "routing-controllers";
import { TmdbRequest } from '../request/tmdb.request';

const path = '/api/movies';
@JsonController()
export class TmdbWrapperController {

    private tmdbRequest: TmdbRequest;

    constructor(
    ) {
        this.tmdbRequest = new TmdbRequest();
    }

    @Get(`${path}/nowPlaying`)
    public fetchNowPlaying() {
        console.log('In [fetchNowPlaying]');
        return this.tmdbRequest.fetchNowPlaying();
    }


    @Get(`${path}/discover`)
    public fetchMovies(
        @QueryParam("date", { required: true }) date: string,
        @QueryParam("language", { required: true }) ln: string,
        @QueryParam("page", { required: true }) page: number,
    ) {
        console.log('In [fetchMovies]', date, ln, page);
        return this.tmdbRequest.fetchMovies(date, ln, page);
    }

    @Get(`${path}/search`)
    public searchMovies(
        @QueryParam("query", { required: true }) searchText: string,
        @QueryParam("page") page: number
    ) {
        console.log('In [searchMovies]', searchText, page);
        return this.tmdbRequest.searchMovies(searchText, page);
    }

    @Get(`${path}/:id`)
    public fetchMovieDetails(
        @Param("id") movieId: number,
        @QueryParam("append_to_response") appendToResponse: string
    ) {
        console.log('In [fetchMovieDetails]', movieId, appendToResponse);
        return this.tmdbRequest.fetchMovieDetails(movieId, appendToResponse);
    }

};
