import service from "./home-page-service";

export class HomePage {
  articles = undefined;
  tags = undefined;
  feeds = undefined;
  selectedFeed = undefined;

  constructor() {
    this.init();
  }

  onTagSelected(tag) {
    const tagFeed = {
      id: tag.toLowerCase(),
      name: "#" + tag,
    };
    this.feeds.push(tagFeed);
    this.selectedFeed = tagFeed.id;
    service
      .fetchArticles({
        limit: 10,
        offset: 0,
        feed: tagFeed,
      })
      .then((articles) => (this.articles = articles));
  }

  onFeedSelected(selectedFeed) {
    this.selectedFeed = selectedFeed.id;
    service
      .fetchArticles({
        limit: 10,
        offset: 0,
        feed: selectedFeed,
      })
      .then((articles) => (this.articles = articles));
  }

  onFavoritedArticle(article) {
    console.log(article);
  }

  init() {
    Promise.all([
      service.fetchArticles({ feed: { name: "all" }, limit: 10, offset: 0 }),
      service.fetchTags(),
    ])
      .then(([articles, tags]) => ({
        articles: articles,
        tags: tags,
      }))
      .then((state) => {
        this.articles = state.articles;
        this.tags = state.tags;
        this.feeds = [
          { id: "personal", name: "Your feed" },
          { id: "all", name: "Global Feed" },
        ];
        this.selectedFeed = "all";
      });
  }
}
