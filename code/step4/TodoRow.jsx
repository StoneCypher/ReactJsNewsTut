/** @jsx React.DOM */

var TodoRow = React.createClass({

    render: function() {

        var CompletionCol = (
            this.props.showHidden?
                <td>{this.props.row.completed? '\u2714' : '\u2716'}</td>
            :   undefined
        );

        return (

            <tr>
                <td>{this.props.row.label}</td>
                {CompletionCol}
                <td>{(new Date(this.props.row.due)).toLocaleString()}</td>
            </tr>

        );

    }

});
