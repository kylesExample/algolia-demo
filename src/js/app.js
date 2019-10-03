import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import {
  hits,
  hitsPerPage,
  pagination,
  rangeInput,
  refinementList,
  searchBox
} from 'instantsearch.js/es/widgets';

export default class MovieSearchApp {
  constructor(options) {
    this.settings = options;
  }

  init() {
    const { applicationId, apiKey } = this.settings;
    const search = instantsearch({
      indexName: 'kyle_demo_movies',
      searchClient: algoliasearch(applicationId, apiKey)
    });

    search.addWidget(
      searchBox({
        container: '#searchbox',
        placeholder: 'The Computer Wore Tennis Shoes'
      })
    );

    search.addWidget(
      hits({
        container: '#results',

        templates: {
          item(item) {
            const {
              __hitIndex,
              actors,
              actor_facets,
              genre,
              image,
              title,
              year
            } = item;

            const actorGallery = actors.slice(0, 6).map((actor, index) => {
              let image = actor_facets[index].split('|')[0];
              return `<div class="actor">
                <img class="portrait" src="${image}">
                <div class="screen-name">${actor}</div>
              </div>`;
            });

            return `
              <div class="movie hit-${__hitIndex}">
              <div class="poster" style="background-image:url(${image})"></div>
              <div class="title">${title}</div>
              <div class="year">${year}</div>
              <div class="genre">${genre.join(', ')}</div>
              <div class="actor-gallery">${actorGallery.join('')}</div>
            </div>
            `;
          }
        }
      })
    );

    search.addWidget(
      hitsPerPage({
        container: '#hits-per-page',
        items: [
          { label: '12 hits per page', value: 12 },
          { label: '24 hits per page', value: 24, default: true },
          { label: '48 hits per page', value: 48 }
        ]
      })
    );

    search.addWidget(
      rangeInput({
        container: '#year-range',
        attribute: 'year'
      })
    );

    search.addWidget(
      refinementList({
        container: '#refinement-list',
        attribute: 'genre',
        operator: 'or'
      })
    );

    search.addWidget(
      pagination({
        container: '#pagination',
        showFirst: false,
        operator: 'or'
      })
    );

    search.start();
  }
}
