/** @jsx React.DOM */

var TodoList = React.createClass({

    getDefaultProperties: function() {
        return {
            showHidden: false
        };
    },

    render: function() {

        var Rows       = [],
            ShowHidden = this.props.showHidden;

        this.props.todo.map(function(ThisRow) {
            if (ShowHidden || (!(ThisRow.completed)) ) {
                Rows.push(<TodoRow row={ThisRow} showHidden={ShowHidden}/>);
            }
        });

        return ( 
            <table id="tlist">
                <tbody>
                    <tr>
                        <th>Topic</th>
                        { ShowHidden? <th>Done</th> : undefined }
                        <th>Due</th>
                    </tr>
                    {Rows}
                </tbody>
            </table>
        );

    }

});
