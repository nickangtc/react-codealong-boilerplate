const ArticlesContainer = React.createClass({
  render: function () {
    var result = this.props.articles.map(function (element, index) {
      return (
        <Article key={element.id} article={element} />
      );
    })

    return (
      <div>
        {result}
      </div>


    );
  }
})
