/** @jsx React.DOM */

var Footer = React.createClass({

    render: function() {

        var Overdue = 0,
            Active  = 0,
            Now     = Date.now(),
            FText;

        this.props.todo.map(function(Item) {
            if (!Item.completed) {
                ++Active;
                if (Item.due < Now) {
                    ++Overdue;
                }
            }
        });

        if (Overdue) {
            FText = Overdue.toString() + ' overdue in ' + Active.toString() + ' tasks.';
        } else {
            if (Active) {
                FText = Active.toString() + ' tasks, all on-time';
            } else {
                FText = 'No active tasks.';
            }
        }

        var uThis = this;
        var toggle = function() {
            uThis.props.setShowHidden( (!(uThis.props.showHidden)) );
        };

        var F_Right = {float:'right'};
        return (

            <div id="footer">
                <label style={F_Right}>
                    <input 
                        type="checkbox" 
                        value={this.props.showHidden} 
                        onChange={toggle}/> Show completed
                </label>
                {FText}
            </div>

        );
    }

});
