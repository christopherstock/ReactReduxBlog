
    /*******************************************************************************************************************
    *   Specifies all redux reducers.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Reducer
    {
        /***************************************************************************************************************
        *   Specifies the global reducer method for the entire TaskList application.
        *
        *   @param {State}  state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {State} The new state object.
        ***************************************************************************************************************/
        static globalReducer( state = new State(), action )
        {
            console.log( "Reducer.taskListReducer being invoked" );
            console.log( " applying action ", action );
            console.log( " old state is ",    state  );

            let newState = null;

            switch ( action.type )
            {
                case ACTION_CREATE_TASK:
                {
                    newState = Reducer.createTaskReducer( state, action );
                    break;
                }

                case ACTION_DELETE_TASK:
                {
                    newState = Reducer.deleteTaskReducer( state, action );
                    break;
                }

                case ACTION_MOVE_TASK_UP:
                {
                    newState = Reducer.moveTaskUpReducer( state, action );
                    break;
                }

                case ACTION_MOVE_TASK_DOWN:
                {
                    newState = Reducer.moveTaskDownReducer( state, action );
                    break;
                }

                default:
                {
                    newState = state;
                    break;
                }
            }

            console.log( " new state is ", newState );

            return newState;
        }

        /***************************************************************************************************************
        *   Reduces the state in order to create a new task.
        *
        *   @param {State}  state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {State} The new and reduced state object.
        ***************************************************************************************************************/
        static createTaskReducer( state, action )
        {
            let newTasks = state.taskList.slice();
            newTasks.push( action.taskName );

            return new State( newTasks );
        }

        /***************************************************************************************************************
        *   Reduces the state in order to delete a new task.
        *
        *   @param {State}  state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {State} The new and reduced state object.
        ***************************************************************************************************************/
        static deleteTaskReducer( state, action )
        {
            let newTasks = state.taskList.slice();
            newTasks.splice( action.taskIndex, 1 );

            return new State( newTasks );
        }

        /***************************************************************************************************************
        *   Reduces the state in order to move a task up.
        *
        *   @param {State}  state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {State} The new and reduced state object.
        ***************************************************************************************************************/
        static moveTaskUpReducer( state, action )
        {
            let newTasks       = state.taskList.slice();
            let taskToMoveUp   = newTasks[ action.taskIndex     ];
            let taskToMoveDown = newTasks[ action.taskIndex - 1 ];

            newTasks[ action.taskIndex - 1 ] = taskToMoveUp;
            newTasks[ action.taskIndex     ] = taskToMoveDown;

            return new State( newTasks );
        }

        /***************************************************************************************************************
        *   Reduces the state in order to move a task down.
        *
        *   @param {State}  state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {State} The new and reduced state object.
        ***************************************************************************************************************/
        static moveTaskDownReducer( state, action )
        {
            let newTasks       = state.taskList.slice();
            let taskToMoveUp   = newTasks[ action.taskIndex + 1 ];
            let taskToMoveDown = newTasks[ action.taskIndex     ];

            newTasks[ action.taskIndex     ] = taskToMoveUp;
            newTasks[ action.taskIndex + 1 ] = taskToMoveDown;

            return new State( newTasks );
        }
    }
