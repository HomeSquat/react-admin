import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Home extends PureComponent {
  render() {
    return (
      <div>home</div>
    )
  }
}

// const mapStateProps = state => ({

// })

export default connect(null, null)(Home)