import ReactGA from 'react-ga';
ReactGA.initialize('UA-87331402-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
