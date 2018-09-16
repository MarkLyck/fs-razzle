import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import withDashboard from 'components/withDashboard'
import Button from 'components/Button'
import { MegadraftEditor, editorStateFromRaw } from 'megadraft'
import { EditorContainer, FileDrop } from './styles'

const CREATE_ARTICLE = gql`
  mutation($title: String, $body: String, $headerImageUrl: String) {
    createArticle(title: $title, body: $body, headerImageUrl: $headerImageUrl) {
      id
    }
  }
`

class NewArticle extends Component {
  state = {
    rerender: false,
    headerImageUrl: '',
    editorState: editorStateFromRaw(null),
  }

  onChange = editorState => this.setState({ editorState })

  // onSubmit = () => {
  //   const { createArticle, actions } = this.props
  //   const { editorState, headerImageUrl } = this.state
  //   const title = this._titleInput.value

  //   actions.newArticle(title, draftToHtml(convertToRaw(editorState.getCurrentContent())),
  // headerImageUrl, createArticle)

  //   this.setState({ editorState: EditorState.createEmpty() })
  //   this._titleInput.value = ''
  // }

  onDrop = files => {
    const data = new FormData()
    data.append('data', files[0])

    fetch('https://api.graph.cool/file/v1/cj5p24f2bblwp0122hin6ek1u', {
      method: 'POST',
      body: data,
    })
      .then(response => response.json())
      .then(file => this.setState({ headerImageUrl: file.url }))
  }

  uploadImageCallBack = file =>
    new Promise(resolve => {
      const data = new FormData()
      data.append('data', file)

      fetch('https://api.graph.cool/file/v1/cj5p24f2bblwp0122hin6ek1u', {
        method: 'POST',
        body: data,
      })
        .then(response => response.json())
        .then(imageFile => {
          console.log(imageFile.url)
          resolve({ data: { link: imageFile.url } })
        })
    })

  render() {
    const { editorState, headerImageUrl } = this.state
    return (
      <Mutation mutation={CREATE_ARTICLE}>
        {createArticle => (
          <div>
            <link rel="stylesheet" href="/static/react-draft-wysiwyg.css" />
            <EditorContainer>
              <FileDrop onDrop={this.onDrop} data-headerimageurl={headerImageUrl}>
                <h3>Drag and drop Header image here</h3>
                <FontAwesomeIcon icon="image" />
              </FileDrop>
              <input className="title" ref={titleInput => (this._titleInput = titleInput)} placeholder="Title" />
              <MegadraftEditor editorState={editorState} onChange={this.onChange} />
              <Button onClick={this.onSubmit} color="primary" aria-label="add" className="submit">
                Submit
                <i className="fa fa-save fa-2x" />
              </Button>
            </EditorContainer>
          </div>
        )}
      </Mutation>
    )
  }
}

NewArticle.propTypes = {
  createArticle: PropTypes.func,
  actions: PropTypes.object,
}

export default withDashboard(NewArticle)
