/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.WEBSITE_URL || 'https://localhost:3000',
  generateRobotsTxt: true, // (optional)
};
