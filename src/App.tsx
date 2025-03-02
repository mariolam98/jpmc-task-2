import React, { Component } from 'react';
import DataStreamer, { ServerRespond } from './DataStreamer';
import Graph from './Graph';
import './App.css';

/**
 * State declaration for <App />
 */
interface IState {
  data: ServerRespond[],
  showGraph: boolean,
}

/**
 * The parent element of the react app.
 * It renders title, button and Graph react element.
 */
 interface PerspectiveViewerElement extends HTMLElement {load: (table: Table) => void,
}
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      // data saves the server responds.
      // We use this state to parse data down to the child element (Graph) as element property
      data: [],
      showGraph: false,
    };
  }

  renderGraph() {
  if (this.state.showGraph) {
    return (<Graph data={this.state.data}/>)
  }
}

componentDidMount() {
// Get element to attach the table from DOM.
cons elem = document. getElementsByTagName('perspective-viewer')[0] as unknown as PerspectiveViewerElement;
}


  getDataFromServer() {
    let x = 0;
    const interval = SetInterval (() => {
          DataStreamer.getData((serverResponds: ServerRespond[]) => {
            this.setState({
            data: serverResponds,
            shownGraph: true,
            )}
elem.setAttribute('view', 'y_line');
elem.setAttribute('column-pivots', '["stock"]');
elem.setAttribute('row-pivots', '["timestamp"]');
elem.setAttribute('columns', '["top_ask_price"]');
elem.setAttribute('aggregates',
   {"stock":"distinct count",
   "top_ask_price":"avg",
   "top_bid_price":"avg",
   "timestamp":"distinct count"});
  }
if (x > 1000) {
  clearInterval(interval);
  }
 }, 100);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bank & Merge Co Task 2
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button"
            // when button is click, our react app tries to request
            // new data from the server.
            // As part of your task, update the getDataFromServer() function
            // to keep requesting the data every 100ms until the app is closed
            // or the server does not return anymore data.
            onClick={() => {this.getDataFromServer()}}>
            Start Streaming Data
          </button>
          <div className="Graph">
            {this.renderGraph()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
