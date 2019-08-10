module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,json,js,css,ico,jpg,png,svg}'
  ],
  swDest: 'build/sw.js',

  // Define runtime caching rules.
  runtimeCaching: [{
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /^(https:\/\/publicdata-weather\.firebaseio\.com)/,

    // Apply a Stale-While-Revalidate strategy.
    handler: 'StaleWhileRevalidate',

    options: {
      // Use a custom cache name.
      cacheName: 'data',

      // Only cache 10 images.
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};
