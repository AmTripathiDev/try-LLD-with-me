abstract class AbstractApps {
  abstract getItems(): void;
}

class SwiggyApp extends AbstractApps {
  getItems() {
    console.log("Fetching items from the Swiggy app...");
    // Implementation for fetching items from the Swiggy app
  }
}

class ZomatoApp extends AbstractApps {
  getItems() {
    console.log("Fetching items from the Zomato app...");
    // Implementation for fetching items from the Zomato app
  }
}

class KiranaStore extends AbstractApps {
  getItems() {
    console.log("Fetching items from the Kirana store...");
    // Implementation for fetching items from the Kirana store
  }
}

abstract class Factory {
  abstract createApp(appType: string): AbstractApps;
}

class AppFactory extends Factory {
  createApp(appType: string): AbstractApps {
    if (appType === "Swiggy") {
      return new SwiggyApp();
    } else if (appType === "Zomato") {
      return new ZomatoApp();
    } else {
      throw new Error("Invalid app type");
    }
  }
}

class LocalWebsiteFactory extends Factory {
  createApp(appType: string): AbstractApps {
    if (appType === "LocalWebsite") {
      return new KiranaStore();
    } else {
      throw new Error("Invalid app type");
    }
  }
}

function main() {
  const appFactory = new AppFactory();
  const swiggyApp = appFactory.createApp("Swiggy");
  swiggyApp.getItems();
  const zomatoApp = appFactory.createApp("Zomato");
  zomatoApp.getItems();

  const localWebsiteFactory = new LocalWebsiteFactory();
  const kiranaStore = localWebsiteFactory.createApp("LocalWebsite");
  kiranaStore.getItems();
}

main();