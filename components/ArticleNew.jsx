var ArticleNew = React.createClass({
  getInitialState: function() {
    return {
      create: false,
      author: "",
      title: "",
      imageUrl: "",
      content: ""
    }
  },

  create: function() {
    if (this.state.create) {
      this.setState({create: false})
    }
    else {
      this.setState({create: true})
    }
  },

  handleAuthorCreate: function(event) {
    this.setState({author: event.target.value})
  },

  handleTitleCreate: function(event) {
    this.setState({title: event.target.value})
  },

  handleImageUrlCreate: function(event) {
    this.setState({imageUrl: event.target.value})
  },

  handleContentCreate: function(event) {
    this.setState({content: event.target.value})
  },

  submitNewArticle: function(event) {
    // callback function here
    event.preventDefault();
    this.props.onArticleCreate({
      author: this.state.author,
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      content: this.state.content,
    })
    // reset create to false so create form will not be rendered
    this.setState({create:false})
  },

  showCreate: function(create) {
    console.log(create);
    if (create) {
      return (
        <div className="form-group">
          <form onSubmit={this.submitNewArticle}>

            <label>Author Name</label>
            <input type='text' placeholder='Your Name' onChange={this.handleAuthorCreate} className="form-control"></input>

            <label>Title</label>
            <input type='text' placeholder='Title' onChange={this.handleTitleCreate} className="form-control"></input>

            <label>Image Url</label>
            <input type='text' placeholder='Image Url' onChange={this.handleImageUrlCreate} className="form-control"></input>

            <label>Content</label>
            <textarea rows={5} cols={40}
              placeholder = 'Your article Content here'
              onChange={this.handleContentCreate}
              className="form-control"
              />
            <button onClick={this.submitNewArticle} className="btn btn-default">Submit</button>
            <button onClick={this.create} className="btn btn-default">Close</button>
          </form>
        </div>
      )
    }
    else {
      return (
        <div>
          <button onClick={this.create} className="btn btn-default">Create New Article</button>
        </div>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.showCreate(this.state.create)}
      </div>
    )
  }
})
