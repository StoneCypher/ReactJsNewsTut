/** @jsx React.DOM */


// at the time of writing, the first is overdue and the second two aren't
// the dates are in 2014, 2018, and 2018; readership begins in 2015
// if this is being read in >= 2018, use your future science to play along


// ragamanth
var TodoData = [
    { label: 'Sign paperwork',       completed: true,  due: 1419471994000 },
    { label: 'Send help to village', completed: false, due: 1514953575000 },
    { label: 'Dig moat',             completed: false, due: 1517631975000 }
];

var ShowHidden = false;
var RenderFunc = undefined;

function setShowHidden(To) {
    ShowHidden = To;
    RenderFunc();
}



RenderFunc = function() {

    var thisTodoApp = (
        <TodoApp
            setShowHidden = {setShowHidden}
            showHidden    = {ShowHidden}
            todo          = {TodoData} />
    );

    React.render(thisTodoApp, document.body);

}

RenderFunc();
