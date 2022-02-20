import PropTypes from 'prop-types';
import { StyledSection, StyledDiv } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledDiv>
        <h3>{title}</h3>
        {children}
      </StyledDiv>
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
