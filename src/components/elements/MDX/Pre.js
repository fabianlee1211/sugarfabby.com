import React from 'react';
import styled from 'styled-components';

const StyledPre = styled.pre`
  background: var(--color-background-code) !important;
  padding: 20px 45px !important;
  border-radius: 0;
  code {
    font-size: 16px;
    * {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 769px) {
    border-radius: 10px;
  }
`;

const Pre = (props) => {
  return (
    <div style={{ margin: '2.5rem -20px' }}>
      <StyledPre {...props} />
    </div>
  );
};

export default Pre;
