const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: "/BEATERS",
  assetPrefix: "/BEATERS/",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: `/BEATERS`,
  },
};
