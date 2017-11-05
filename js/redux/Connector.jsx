
    /*******************************************************************************************************************
    *   Specifies all redux connector methods.
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
                onTaskDelete:   Action.deleteTaskAction,
                onTaskMoveUp:   Action.moveTaskUpAction,
                onTaskMoveDown: Action.moveTaskDownAction,
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
                onTaskCreate: Action.createTaskAction,
            };

            return ReactRedux.connect(
                null,
                mapDispatchToProps
            )( TaskInputUnconnected );
        }
    }
