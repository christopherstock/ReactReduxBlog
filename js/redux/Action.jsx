
    const ACTION_CREATE_TASK    = 'ACTION_CREATE_TASK';
    const ACTION_DELETE_TASK    = 'ACTION_DELETE_TASK';
    const ACTION_MOVE_TASK_UP   = 'ACTION_MOVE_TASK_UP';
    const ACTION_MOVE_TASK_DOWN = 'ACTION_MOVE_TASK_DOWN';

    /*******************************************************************************************************************
    *   Specifies all redux action creators.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Action
    {
        /***************************************************************************************************************
        *   Specifies the redux action for creating a task.
        *
        *   @param {string} taskName The name of the task to create.
        *
        *   @return {Object} The action object for creating a task.
        ***************************************************************************************************************/
        static createTask( taskName )
        {
            return {
                type:     ACTION_CREATE_TASK,
                taskName: taskName,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action for deleting a task.
        *
        *   @param {number} taskIndex The index of the task to delete.
        *
        *   @return {Object} The action object for deleting a task.
        ***************************************************************************************************************/
        static deleteTask( taskIndex )
        {
            return {
                type:      ACTION_DELETE_TASK,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action for moving a task up.
        *
        *   @param {number} taskIndex The index of the task to move up.
        *
        *   @return {Object} The action object for moving a task up.
        ***************************************************************************************************************/
        static moveTaskUp( taskIndex )
        {
            return {
                type:      ACTION_MOVE_TASK_UP,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action for moving a task down.
        *
        *   @param {number} taskIndex The index of the task to move down.
        *
        *   @return {Object} The action object for moving a task down.
        ***************************************************************************************************************/
        static moveTaskDown( taskIndex )
        {
            return {
                type:      ACTION_MOVE_TASK_DOWN,
                taskIndex: taskIndex,
            }
        }
    }
