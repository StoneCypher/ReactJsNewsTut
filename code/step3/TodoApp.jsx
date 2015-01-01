/** @jsx React.DOM */

var TodoApp = React.createClass({

    render: function() {
        return (<div>
            <div id="header">Header</div>
            <TodoList todo={this.props.todo}/>
            <div id="footer">Footer</div>
        </div>);
    }

});


