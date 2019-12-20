import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Login extends PureComponent {
  render() {
    return (
      <div>login</div>
    )
  }
}

// const mapStateProps = state => ({

// })

export default connect(null, null)(Login)