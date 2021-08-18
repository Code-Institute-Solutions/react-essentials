import React from "react";

class StatefulGreeting extends React.Component{
    render() {
        return <h1>Hello {this.props.greeting}</h1>
    }
}

export default StatefulGreeting;