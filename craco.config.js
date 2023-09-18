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
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
      },
    },
    devServer: {
        port: 9000,
      },
  };