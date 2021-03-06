
    /*******************************************************************************************************************
    *   Represents the TaskList component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskListUnconnected extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "TaskList.render() being invoked" );

            // animate main container height
            document.getElementById( "mainContainer" ).style.height = ( 150 + ( this.props.taskList.length * 55 ) ) + "px";

            return <ul id="taskList">

                { this.createItems() }

            </ul>;
        }

        /***************************************************************************************************************
        *   Creates and returns all items for the task list.
        *
        *   @return {JSXTransformer[]} The rendered JSX elements.
        ***************************************************************************************************************/
        createItems()
        {
            let items = [];

            // browse all task list items
            for ( let index = 0; index < this.props.taskList.length; ++index )
            {
                items.push(
                    <li key={ index }>

                        { /* The item description */ }
                        { this.props.taskList[ index ] }

                        { /* Button 'Delete' */ }
                        <button
                            onClick={ () => { this.props.onTaskDelete( index ); } }
                            className="button"
                        >
                            &#10006;
                        </button>

                        { /* Button 'Move Down' */ }
                        <button
                            onClick={ () => { this.props.onTaskMoveDown( index ); } }
                            disabled={ index === this.props.taskList.length - 1 }
                            className="button"
                        >
                            &#9660;
                        </button>

                        { /* Button 'Move Up' */ }
                        <button
                            onClick={ () => { this.props.onTaskMoveUp( index ); } }
                            disabled={ index === 0 }
                            className="button"
                        >
                            &#9650;
                        </button>

                    </li>
                );
            }

            return items;
        }
    }

    const TaskListStateToProps = ( state ) => {
        return {
            taskList: state.taskList
        }
    };
    const TaskListDispatchToProps = {
        onTaskDelete:   Action.deleteTask,
        onTaskMoveUp:   Action.moveTaskUp,
        onTaskMoveDown: Action.moveTaskDown,
    };

    const TaskList = ReactRedux.connect(
        TaskListStateToProps,
        TaskListDispatchToProps
    )( TaskListUnconnected );
