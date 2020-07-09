import { bindable, computedFrom } from "aurelia-framework";
export class ConduitArticlesMeta {
  @bindable
  article;
  @computedFrom("article.date")
  get date() {
    return new Date(this.article.createdAt).toLocaleString();
  }
}
