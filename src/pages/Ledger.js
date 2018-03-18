import React from 'react';
import styled from 'styled-components';
import BaseLayout from '../layouts/base';
import Card from '../components/Card';
import Column from '../components/Column';
import SubscribeForm from '../components/SubscribeForm';
import LedgerLogo from '../components/LedgerLogo';
import { responsive } from '../styles';

const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
    justify-content: ;
  }
`;

const StyledColumn = styled(Column)`
  padding: 15px;
  & > * {
    margin: 10px;
  }
  & > div:last-child {
    margin-top: 32px;
  }
`;

const Ledger = ({ ...props }) => (
  <BaseLayout>
    <Card {...props}>
      <StyledCardContainer>
        <StyledColumn>
          <LedgerLogo />
          <SubscribeForm />
        </StyledColumn>
      </StyledCardContainer>
    </Card>
  </BaseLayout>
);
export default Ledger;