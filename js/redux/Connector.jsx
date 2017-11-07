
    /*******************************************************************************************************************
    *   Specifies all redux connector methods.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Connector
    {
        /***************************************************************************************************************
        *   Connects the specified react component with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskList()
        {
            const stateToProps = ( state ) => {
                return {
                    taskList: state.taskList
                }
            };

            const dispatchToProps =
            {
                onTaskDelete:   Action.deleteTask,
                onTaskMoveUp:   Action.moveTaskUp,
                onTaskMoveDown: Action.moveTaskDown,
            };

            return ReactRedux.connect(
                stateToProps,
                dispatchToProps
            )( TaskListUnconnected );
        }

        /***************************************************************************************************************
        *   Connects the specified react component with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskInput()
        {
            const dispatchToProps = {
                onTaskCreate: Action.createTask,
            };

            return ReactRedux.connect(
                null,
                dispatchToProps
            )( TaskInputUnconnected );
        }
    }
