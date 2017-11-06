
    /*******************************************************************************************************************
    *   Specifies all redux connector methods.
    *
    *   TODO unify to single connector method?
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Connector
    {
        /***************************************************************************************************************
        *   Connects the react component 'TaskList' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskList()
        {
            const mapStateToProps = ( state ) => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps =
            {
                onTaskDelete:   Action.deleteTask,
                onTaskMoveUp:   Action.moveTaskUp,
                onTaskMoveDown: Action.moveTaskDown,
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( TaskListUnconnected );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskInput()
        {
            const mapDispatchToProps = {
                onTaskCreate: Action.createTask,
            };

            return ReactRedux.connect(
                null,
                mapDispatchToProps
            )( TaskInputUnconnected );
        }
    }
