const ArticlesContainer = React.createClass({
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12 div-margin">
            <img className="avatar col-md-3 left-space" src="https://cdn3.iconfinder.com/data/icons/ballicons-free/128/man.png"></img>
            <p className="green col-md-9 left-space">
              Author name
            </p>

          </div>

          <h3>
            Article title
          </h3>
          <img src="http://s.thestreet.com/files/tsc/v2008/photos/all-pics/misc/m-z/ronaldmcdonald-large.jpg"></img>
          <p>
            Article Content
          </p>
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

        <div>
          {this.props.articles[0].content}

        </div>
      </div>
    );
  }
})
