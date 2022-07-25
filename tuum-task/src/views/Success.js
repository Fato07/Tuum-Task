import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Success = () => {
  return (
    <>
      <StyledDiv>
        <Header as="h1" content="All good!" />
        <div>
          Thank you for your interest! You can close this form by pressing “X” on
          the top right corner.
        </div>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default Success;
