import styled from 'react-emotion'

export const Title = styled.h2`
  font-weight: 100;
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Divider = styled.div`
  width: 75px;
  background: ${props => props.theme.colors.primary};
  height: 2px;
  margin-bottom: 24px;
`
