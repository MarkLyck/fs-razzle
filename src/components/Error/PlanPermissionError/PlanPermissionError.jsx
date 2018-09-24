import React from 'react'
import styled from 'react-emotion'
import Button from 'components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  padding: 24px;
  text-align: center;
  h3 {
    margin: 16px 0;
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 16px;
  }
`

const PlanPermissionError = ({ history, planName }) => (
  <Container>
    <h3>To see this data, you need to be subscribed to the {planName} model</h3>
    <p>You can change your plan in your account page.</p>
    <Button type="submit" variant="raised" onClick={() => history.push('/dashboard/account')}>
      Change plan
    </Button>
  </Container>
)

export default PlanPermissionError
