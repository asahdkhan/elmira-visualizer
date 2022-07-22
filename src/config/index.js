/* eslint-disable */
const config = () => {
  switch (window.location.host) {
    case 'staging.elmirastoveworks.com':
      return 'https://staging.elmirastoveworks.com/wp-content/reactpress/apps/visualizer/build/';
    case 'elmirastoveworks.com':
      return 'https://elmirastoveworks.com/wp-content/reactpress/apps/visualizer/build/';
    case 'reactdemo.local':
      return 'http://reactdemo.local/wp-content/reactpress/apps/elmira-visualizer/build/';
    default:
      return '';
  }
};

export default config;
