import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned here will show up as props
  // inside of BookList as this.props.

  // if the state ever changes, the container will instantly re-render.
  return {
    books: state.books
  };
}
// This makes this Component a Container component
export default connect(mapStateToProps)(BookList)
