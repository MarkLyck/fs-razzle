import React, { Component } from 'react'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Button from 'components/Button'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
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
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState })
  }

  onSubmit = () => {
    const { createArticle, actions } = this.props
    const { editorState, headerImageUrl } = this.state
    const title = this._titleInput.value

    actions.newArticle(title, draftToHtml(convertToRaw(editorState.getCurrentContent())), headerImageUrl, createArticle)

    this.setState({ editorState: EditorState.createEmpty() })
    this._titleInput.value = ''
  }

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
                <i className="fa fa-image fa-5x" />
              </FileDrop>
              <input
                className="title"
                // eslint-disable-next-line
                ref={titleInput => (this._titleInput = titleInput)}
                placeholder="Title"
              />
              <Editor
                editorState={editorState}
                wrapperClassName="wrapper"
                editorClassName="editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                  image: {
                    urlEnabled: true,
                    uploadEnabled: true,
                    alignmentEnabled: true,
                    uploadCallback: this.uploadImageCallBack,
                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                    alt: { present: false, mandatory: false },
                    defaultSize: {
                      height: 'auto',
                      width: 'auto',
                    },
                  },
                }}
              />
              <div
                className="preview"
                // eslint-disable-next-line
                dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }}
              />
              <Button onClick={this.onSubmit} fab color="primary" aria-label="add" className="submit">
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

export default withDashboard(withCharts(NewArticle))
