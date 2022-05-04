import React, { Component, Fragment } from 'react';

export default class OneMovie extends Component {
  componentDidMount() {
    this.setState({
      movie: {
        id: this.props.match.params.id,
        title: 'Some movie',
        runtime: 150,
      },
    });
  }
  state = { movie: [] };
  render() {
    return (
      <Fragment>
        <h2>
          Movie : {this.state.movie.title} {this.state.movie.id}
        </h2>
        <table className="table table-compact table-striped">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <strong>Title:</strong>
              </td>
              <td>
                <strong>{this.state.movie.title}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Runtime:</strong>
              </td>
              <td>
                <strong>{this.state.movie.runtime}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
