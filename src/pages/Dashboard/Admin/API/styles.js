import styled from 'react-emotion'
import Dropzone from 'react-dropzone'

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px;
  background: white;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);

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
  border: 2px dashed ${props => props.theme.colors.primary};
  cursor: pointer;
`
