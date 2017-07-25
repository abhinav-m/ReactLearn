import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = { currentEvent: '___' }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({ currentEvent: e.type })
    }
    render() {
        return (<div>
            <textarea cols="30"
                onKeyPress={this.update}
                onCopy={this.update}
                onCut={this.update}
                onPaste={this.update}
                onBlur={this.update}
                onDoubleClick={this.update}
                onFocus={this.update}
                onTouchStart={this.update}
                onTouchMove={this.update}
                onTouchEnd={this.update}
                rows="10" />
            <h1 > {this.state.currentEvent} </h1>
        </div >
        );
    }
}

export default App;