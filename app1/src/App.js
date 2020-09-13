import React from "react";
import Slides from './Slides';
const RemoteNewsList = React.lazy(() => import("app2/NewsList"));

const App = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>App1, Local Slides, Remote NewsList</h2>
    <Slides />
    <React.Suspense fallback="Loading Slides">
      <RemoteNewsList />
    </React.Suspense>
  </div>
);

export default App;
