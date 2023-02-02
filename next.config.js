/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
// const withFonts = require('next-fonts');

module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true,
});

// module.exports = withFonts(withCss(
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000,
//           },
//         },
//       });

//       return config;
//     },
//   }),
// ));

module.exports = nextConfig;
