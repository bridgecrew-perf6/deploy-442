module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/boat/:slug",
      handler: "boat.findOneBySlug",
    },
  ],
};
