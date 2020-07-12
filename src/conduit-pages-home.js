import service from "./conduit-pages-home-service";

export class ConduitPagesHome {
  articles = undefined;
  tags = undefined;
  feeds = undefined;
  selectedFeed = undefined;

  constructor() {
    service.init().then((state) => this.setState(state));
  }

  onTagSelected(tag) {
    service
      .onTagSelected({ tag, state: this.getState() })
      .then((state) => this.setState(state));
  }

  onFeedSelected(feed) {
    service
      .onFeedSelected({ feed, state: this.getState() })
      .then((state) => this.setState(state));
  }

  onFavoritedArticle(article) {
    console.log(article);
  }

  getState() {
    return JSON.parse(
      JSON.stringify({
        articles: this.articles,
        pages: this.pages,
        tags: this.tags,
        feeds: this.feeds,
        selectedFeed: this.selectedFeed,
        selectedPage: this.selectedPage,
      })
    );
  }

  setState(input) {
    this.articles = input.articles;
    this.pages = input.pages;
    this.tags = input.tags;
    this.feeds = input.feeds;
    this.selectedFeed = input.selectedFeed;
    this.selectedPage = input.selectedPage;
  }
}
