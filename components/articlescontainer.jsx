const ArticlesContainer = React.createClass({

  getInitialState: function () {
    return {
      information: []
    }
  },

  componentWillMount: function() {
    $.ajax({
      url: "https://medium-basic-api.herokuapp.com/articles",
      method: "GET",
      dataType: 'json',
      cache: false,
      success: function(dataFromServer) {
        this.setState({information: dataFromServer});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("https://medium-basic-api.herokuapp.com/articles", status, err.toString());
      }.bind(this)
    });
  },

  handleArticleCreate: function(newArticle) {
    // ajax Post request
    $.ajax({
      url: "https://medium-basic-api.herokuapp.com/article/new",
      method: 'POST',
      dataType: 'json',
      data: newArticle,
      success: function(dataFromServer) {

        var articles = this.state.information;
        articles.unshift(dataFromServer.data);

        this.setState({information: articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("https://medium-basic-api.herokuapp.com/article/new", xhr, status, err)
      }.bind(this)
    });
  },

  render: function () {
    var result = this.state.information.map(function (element, index) {
      return (
        <Article key={element.id} article={element} />
      );
    })

    return (
      <div>
        <ArticleNew onArticleCreate={this.handleArticleCreate} />
        {result}
      </div>


    );
  }
})
