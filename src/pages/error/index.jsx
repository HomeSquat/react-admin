import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Error extends PureComponent {
  render() {
    return (
      <div>error</div>
    )
  }
}

// const mapStateProps = state => ({

// })

export default connect(null, null)(Error)