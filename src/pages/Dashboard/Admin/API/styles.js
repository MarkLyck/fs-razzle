import styled from 'react-emotion'
import Dropzone from 'react-dropzone'
import Box from 'components/Box'

export const Container = styled(Box)`
  flex-direction: column;
  padding: 16px;
  margin: 16px;

  h2,
  h3 {
    margin-bottom: 16px;
  }
`

export const FileDrop = styled(Dropzone)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  border-radius: 6px;
  border: 2px dashed ${props => props.theme.colors.primary};
  cursor: pointer;
  margin-bottom: 16px;
`
