exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/:path";
  
      // Update the page.
      createPage(page);
    }
  };