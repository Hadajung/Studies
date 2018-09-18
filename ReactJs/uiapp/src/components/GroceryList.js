import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GroceryList extends Component {
  render() {
    return (
      <div>
        <ol>
          {
            this.props.list.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ol>
      </div>
    )
  }
}

GroceryList.defaultProps = {
  list: []
}

GroceryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

export default GroceryList;
