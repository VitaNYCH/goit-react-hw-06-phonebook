import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTitle, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      {title && <FeedbackTitle>{title}</FeedbackTitle>}
      {children}
    </SectionTitle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
