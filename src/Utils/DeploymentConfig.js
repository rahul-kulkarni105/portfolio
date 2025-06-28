// Deployment configuration for different environments
export const deploymentConfig = {
  // GitHub Pages deployment
  isGithubPages: typeof window !== 'undefined' && window.location.hostname.includes('github.io'),

  // Base path for GitHub Pages
  basePath: typeof window !== 'undefined' && window.location.hostname.includes('github.io')
    ? '/portfolio'
    : '',

  // Get the correct router type
  getRouterType() {
    return typeof window !== 'undefined' && window.location.hostname.includes('github.io')
      ? 'hash' // Use HashRouter for GitHub Pages
      : 'browser'; // Use BrowserRouter for Vercel and local dev
  },
};
