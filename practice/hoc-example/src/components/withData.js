import React, { Component } from 'react';

/* withData is an example of a higher order component that takes in another component
and returns a wrapped component with the data fetched, and isFetching, fetchError
and 'name' prop passed to it. */
const withData = function(InnerComponent, fetchData, name) {
  return class extends Component {
    constructor(props) {
      console.log(props);
      super(props);
      this.state = {
        data: {},
        isFetching: true,
        fetchError: false,
        name: name
      };
    }

    componentDidMount() {
      //Fetch data when component mounts.
      fetchData
        .then(data =>
          this.setState({
            data,
            isFetching: false,
            fetchError: false
          })
        )
        .catch(e =>
          this.setState({
            isFetching: false,
            fetchError: true
          })
        );
    }

    //Reset state when component unmounts.
    componentWillUnmount() {
      this.setState({
        data: {},
        isFetching: true,
        fetchError: false
      });
    }

    render() {
      // Render the component with the data
      return (
        <InnerComponent
          data={this.state.data}
          isFetching={this.state.isFetching}
          fetchError={this.state.fetchError}
          name={this.state.name}
          {...this.props}
        />
      );
    }
  };
};

export default withData;
