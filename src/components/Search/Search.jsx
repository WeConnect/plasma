import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';
import style from './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
    this.state = {
      text: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    if (value) {
      this.setState({ text: value });
    }
  }

  onChange(event) {
    const { onChange } = this.props;

    this.setState({ text: event.target.value });

    onChange && onChange(event);
  }

  onClear(event) {
    const { onClear } = this.props;

    this.setState({ text: '' });

    if (onClear) {
      onClear(event);
    }
  }

  render() {
    const {
      clearable,
      clearIconUrl,
      disabled,
      iconUrl,
      instructionText,
      placeholder,
    } = this.props;

    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.container}
      >
        <div className={style.inputWrapper}>
          <span className={style.searchIconContainer}>
            <img src={iconUrl} role="presentation" />
          </span>
          <input
            className={style.input}
            disabled={disabled}
            onChange={this.onChange}
            placeholder={placeholder}
            type="text"
            value={this.state.text}
          />
          {
            clearable && clearIconUrl && (this.state.text !== '') &&
            <img
              className={style.clearableIcon}
              onClick={this.onClear}
              src={clearIconUrl}
              role="presentation"
            />
          }
        </div>
        {
          instructionText &&
          <div className={style.instructionText}>
            {instructionText}
          </div>
        }
      </div>
    );
  }
}

Search.defaultProps = {
  placeholder: 'Search...',
};

Search.propTypes = {
  clearable: PropTypes.bool,
  clearIconUrl: PropTypes.string,
  disabled: PropTypes.bool,
  iconUrl: PropTypes.string,
  instructionText: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  ...getDataProps(),
};

Search.displayName = 'Plasma@Search';

export default Search;
