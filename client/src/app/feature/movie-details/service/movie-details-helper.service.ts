import { Injectable } from '@angular/core';
import { UtilService } from '@app/core';

import { MovieMetaTag } from './../models/movie-detail-vo.model';
import { MovieDetailsRespose, Crew, Genre } from './../models/movie-detail.model';

interface Tag {
  key: string;
  value: string;
}

const jobTags: Tag[] = [
  {
    key: 'Director',
    value: 'Director'
  },
  {
    key: 'Writer',
    value: 'Writer'
  },
  {
    key: 'Producer',
    value: 'Producer'
  },
  {
    key: 'Screenplay',
    value: 'Script'
  }
];
const generalTags: Tag[] = [
  {
    key: 'original_title',
    value: 'Original Title'
  },
  {
    key: 'release_date',
    value: 'Release Date'
  },
  {
    key: 'status',
    value: 'Status'
  }
];
const genreTag: Tag =
{
  key: 'genres',
  value: 'Genres'
}

const metaTagSortOrder = ['Original Title', 'Director', 'Writer', 'Screenplay', 'Producer', 'Release Date', 'Status', 'Genres'];

@Injectable()
export class MovieDetailsHelperService {

  constructor(
    private util: UtilService
  ) { }

  public populateMetaTags(movieDetails: MovieDetailsRespose): MovieMetaTag[] {

    let movieMetaTags: MovieMetaTag[];
    const crewDetails = movieDetails.credits.crew;

    movieMetaTags = [
      ...this.fillJobTags(crewDetails),
      ...this.fillGeneralTags(movieDetails),
      this.fillGenreTag(movieDetails)
    ];

    return this.util.customSort(movieMetaTags, metaTagSortOrder, 'title');
  }

  private fillJobTags(crewDetails: Crew[]): MovieMetaTag[] {
    let movieMetaTags: MovieMetaTag[] = [];

    crewDetails.forEach(crew => {
      if (this.hasJobInJobTags(crew)) {
        const existingMetaTag = movieMetaTags.find(tag => tag.title === crew.job);
        if (existingMetaTag) {
          existingMetaTag.text += `, ${crew.name}`;
        } else {
          movieMetaTags.push(new MovieMetaTag(crew.job, crew.name));
        }
      }
    });

    return movieMetaTags;
  }

  private fillGeneralTags(movieDetails: MovieDetailsRespose): MovieMetaTag[] {
    const metaTags: MovieMetaTag[] = [];
    generalTags.forEach(tag => {
      const text = movieDetails[tag.key];
      const metaTag = new MovieMetaTag(tag.value, text);

      metaTags.push(metaTag);
    });

    return metaTags;
  }

  private fillGenreTag(movieDetails: MovieDetailsRespose): MovieMetaTag {
    const genre: Genre[] = movieDetails[genreTag.key];
    let genreText = genre.map(aGenre => aGenre.name).join(', ');

    return new MovieMetaTag(genreTag.value, genreText);
  }

  private hasJobInJobTags(crew: Crew): boolean {
    if (jobTags.some(tag => crew.job === tag.key)) {
      return true;
    }
    return false;
  }

}
