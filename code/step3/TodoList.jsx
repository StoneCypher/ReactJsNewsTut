/** @jsx React.DOM */

var TodoList = React.createClass({

    render: function() {

        var Rows = [];
        this.props.todo.map(function(ThisRow) {
            Rows.push(<TodoRow row={ThisRow}/>);
        });

        return ( 
            <table id="tlist">
                <tbody>
                    <tr>
                        <th>Topic</th>
                        <th>Done</th>
                        <th>Due</th>
                    </tr>
                    {Rows}
                </tbody>
            </table>
        );

    }

});
