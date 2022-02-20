import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StyledLabel,
  StyledInput,
  StyledSpan,
  StyledForm,
} from './Filter.styled';

export default class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <StyledForm>
        <StyledLabel>
          <StyledSpan>Find contacts by name</StyledSpan>
          <StyledInput type="text" onChange={onChange} value={filter} />
        </StyledLabel>
      </StyledForm>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
