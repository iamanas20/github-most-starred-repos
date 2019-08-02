import React, { Component } from 'react';
import List from '../list/index.js';
import './page.scss';

import { connect } from 'react-redux';
import { fetchRepos } from '../../../actions/actions';

class Page extends Component {

  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return <div className="page">
      <h1 className="page-title">GitHub Most Starred Repos</h1>
      <List items={this.props.repos.repos.repos}/>
    </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRepos: function() {
      dispatch(fetchRepos());
    }
  };
}

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);