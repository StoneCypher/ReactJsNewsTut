/** @jsx React.DOM */

var TodoApp = React.createClass({

    getDefaultProperties: function() {
        return {
            showHidden: false
        };
    },

    render: function() {

        return (<div>
            <div id="header">Header</div>
            <TodoList showHidden={this.props.showHidden} todo={this.props.todo} />
            <Footer 
                showHidden={this.props.showHidden} 
                todo={this.props.todo} 
                setShowHidden={setShowHidden}/>
        </div>);

    }

});


