import styled from 'react-emotion'
import Dropzone from 'react-dropzone'
import { MegadraftEditor } from 'megadraft'

export const Editor = styled(MegadraftEditor)`
  background: white;
  margin: 0 32px;
`

export const EditorContainer = styled.div`
    padding: 32px;
    background: white;
    height: 100%;
    .title {
        background: none;
        border: none;
        margin: 16px;
        outline: none;
        font-size: 1.2rem;
        width: 100%;
    }
    .megadraft {
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        padding: 40px;
    }
    .editor {
        background: ${props => props.theme.colors.white}
        padding: 32px;
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
    }
    .preview {
        background: ${props => props.theme.colors.white}
        width: 100%;
        min-height: 100px;
        border: none;
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        padding: 32px;
    }
    .submit {
        position: fixed;
        bottom: 16px;
        right: 32px;
    }
`

export const FileDrop = styled(Dropzone)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    width: 100%;
    height: 350px;
    border: 2px dashed ${props => props.theme.colors.primary};
    background-image: ${props => (props['data-headerImageUrl'] ? `url(${props['data-headerImageUrl']})` : 'none')}
    background-repeat: no-repeat;
    background-size: cover;
`
