import React, { Component } from 'react';
import Row from '../row/index.js';
import './page.scss';


class Page extends Component {
    render() {
      return (
        <div className="page">
            <Row />
        </div>
      )
  };
}

export default Page;