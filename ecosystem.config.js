module.exports = {
  apps: [
    {
      name: 'junoon-stapi',
      script: 'pnpm start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
