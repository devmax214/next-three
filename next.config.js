/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir: true,
    esmExternals: "loose",
    largePageDataBytes: 1000 * 1000,
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites: [
    {
      source: "/api/auth",
      destination: "/",
    },
  ],
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });
    return config;
  },
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
  // webpack(config, { isServer }) {
  //   config.module.rules.push({
  //     test: /\.(glb|ogg|mp3|wav|mpe?g)$/i,
  //     exclude: config.exclude,
  //     use: [
  //       {
  //         loader: require.resolve("url-loader"),
  //         options: {
  //           fallback: require.resolve("file-loader"),
  //           publicPath: `${config.assetPrefix}/_next/static/images/`,
  //           outputPath: `${isServer ? "../" : ""}static/images/`,
  //           name: "[name]-[hash].[ext]",
  //           esModule: config.esModule || false,
  //         },
  //       },
  //     ],
  //   });
  //
  //   return config
  // },
};

module.exports = nextConfig;
