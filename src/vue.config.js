// module.exports = {
//   chainwebpack: (config) => {
//     config.module.rule("vue").use("vue-loader");
//     config.module
//       .rule("pdf")
//       .test(/\.pdf$/)
//       .use("file-loader")
//       .loader("file-loader");
//   },
// };

// module.exports = {
//   chainWebpack: (config) => {
//     config.module
//       .rule("pdf")
//       .test(/\.(pdf)(\?.*)?$/)
//       .use("file-loader")
//       .loader("file-loader")
//       .options({
//         name: "assets/pdf/[name].[hash:8].[ext]",
//       });
//   },
// };
