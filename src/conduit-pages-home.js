import service from "./conduit-pages-home-service";

export class ConduitPagesHome {
  state = undefined;

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
    return JSON.parse(JSON.stringify(this.state));
  }

  setState(input) {
    this.state = Object.assign({}, input);
  }
}
