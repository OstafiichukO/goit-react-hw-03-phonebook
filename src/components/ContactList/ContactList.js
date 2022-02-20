import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Contact from './Contact';
import { StyledUl } from './ContactList.styled';

export default class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <>
        <StyledUl>
          <Contact contacts={contacts} onClick={onClick} />
        </StyledUl>
      </>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
