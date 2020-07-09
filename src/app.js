import { PLATFORM } from "aurelia-framework";
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = "Conduit";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("home-page"),
      },
    ]);
  }
}
