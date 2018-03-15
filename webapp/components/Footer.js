import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { utils } from '@bpanel/bpanel-ui';

const { connectTheme } = utils;

class Footer extends PureComponent {
  static get propTypes() {
    return {
      customChildren: PropTypes.node,
      theme: PropTypes.object
    };
  }

  render() {
    const { theme, customChildren } = this.props;
    return (
      <div className="container-fluid">
        <footer className={`${theme.footer.container} row align-items-center`}>
          {customChildren}
        </footer>
      </div>
    );
  }
}

export default connectTheme(Footer);