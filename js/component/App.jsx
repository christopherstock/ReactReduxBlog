
    /*******************************************************************************************************************
    *   The entire application component.
    *
    *   TODO ASAP Recreate state for component TaskInput.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class App extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />

            </div>;
        }
    }
