import React from 'react';
import ReactDOM from 'react-dom';
import Phylocanvas from 'phylocanvas';

class PhyloViewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tree_text: '',
        tree: undefined
      };
    }

    loadTree(data_url) {
      $.ajax({
        url: data_url,
        dataType: 'text',
        cache: false,
        success: function(results) {
          this.setState({tree_text: results});
          var tree = Phylocanvas.createTree('phyloviewer_container');
          tree.load(results, () => console.log("tree loaded"));
          this.setState({tree: tree});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(data_url, status, err.toString());
        }.bind(this)
      });
    }

    componentDidMount() {
      console.log("loading tree");
      this.loadTree(this.props.data_url);
    }

    render() {
      return (<div>rendenderd</div>);
    }
}


ReactDOM.render(
  <PhyloViewer data_url="/static/data/KZNEC1.tree" />,
  document.getElementById('phyloviewer_container')
)
