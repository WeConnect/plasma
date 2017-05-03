import React from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

class Text extends React.Component {
  render() {
    return (
      <div className={style.wrapper} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

Text.defaultProps = {
  style: { width: 200, height: 'auto' },
};

Text.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.element,
};

Text.displayName = 'Text';

export default Base(Text);
