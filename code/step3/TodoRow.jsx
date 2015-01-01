/** @jsx React.DOM */

var TodoRow = React.createClass({

    render: function() {
        return (
            <tr>
                <td>{this.props.row.label}</td>
                <td>{this.props.row.completed? '\u2714' : '\u2716'}</td>
                <td>{(new Date(this.props.row.due)).toLocaleString()}</td>
            </tr>
        );
    }

});
