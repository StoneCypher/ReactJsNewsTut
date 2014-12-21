/** @jsx React.DOM */

var Hello = React.createClass({

    getDefaultProps: function() {
        return {
            toWhom: "World"
        };
    },

    render: function() {
        return <div>Hello, {this.props.toWhom}!</div>;
    }

});
