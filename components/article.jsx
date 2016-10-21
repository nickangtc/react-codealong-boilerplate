const Article = React.createClass({
  getInitialState: function () {
    return {
      expanded: false
    }
  },
  viewFullArticle: function () {
    if (this.state.expanded) {
      this.setState({expanded: false});
    } else {
      this.setState({expanded: true});
    }
  },

  view: function (expanded) {
    if (expanded) {
      return (
        <div>
          <a className="medium" onClick={this.viewFullArticle}>view less</a><br></br>
        </div>
      )
    } else {
      return (
        <div>
          <a className="medium" onClick={this.viewFullArticle}>view more</a><br></br>
        </div>
      )
    }
  },

  shortener: function (text, expanded) {
    if (expanded) {
      return text;
    } else {
      if (text.length < 100) {
        return text;
      } else {
        return text.slice(0, 100) + "..."
      }
    }
  },

  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12 div-margin">
            <img className="avatar col-md-3 left-space" src="https://cdn3.iconfinder.com/data/icons/ballicons-free/128/man.png"></img>
            <p className="green col-md-9 left-space">
              {this.props.article.author}
            </p>

          </div>

          <h3>
            {this.props.article.title}
          </h3>
          <img src={this.props.article.imageUrl}></img>
          <p>
            {this.shortener(this.props.article.content, this.state.expanded)}
          </p>
          {this.view(this.state.expanded)}

          <div>
            <p className="inline-left">
              <span className="glyphicon glyphicon-heart-empty green">
                4 Likes
              </span>
            </p>
            <p className="inline-right">
              10 Responses
            </p>
          </div>
        </div>
      </div>
    );
  }
})
