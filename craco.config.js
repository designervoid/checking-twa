/** @type {import('@craco/types/dist/config').CracoConfig} */
module.exports = {
    webpack: {
      configure: {
        module: {
            rules: [
                {
                  test: /\.m?js/,
                  resolve: {
                    fullySpecified: false,
                  },
                },
                {
                  test: /\.m?js$/,
                  exclude: /node_modules\/@twa-dev/,
                  enforce: 'pre',
                  use: ['source-map-loader'],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        ignoreWarnings: [/Failed to parse source map/],
      },
    },
    devServer: {
        port: 9000,
      },
  };