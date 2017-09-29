import React from 'react';

import { Header } from '../Shared/header';

export class Home extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <Header />
        <div>
          <h3>Home</h3>
        </div>
      </div>
    );
  }
}
