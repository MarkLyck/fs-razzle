import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  color: #737373;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  .with-icon {
    padding-left: 40px;
  }
`

export const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9rem;
  margin-bottom: 16px;
  padding: 16px;
  outline: none;
  width: 100%;
`
