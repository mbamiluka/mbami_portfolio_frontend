const backendUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_PRODUCTION
  : process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT;

export { backendUrl };