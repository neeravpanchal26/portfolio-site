module.exports = {
  resolve: {
    fallback: [
      { stream: require.resolve("stream-browserify") },
      { zlib: require.resolve("browserify-zlib") },
      { util: require.resolve("util/") },
    ],
  },
};
