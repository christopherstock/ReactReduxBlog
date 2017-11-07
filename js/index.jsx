
    // specify the application title
    const APPLICATION_TITLE = "React Redux Task List";

    // acclaim debug console and set page title
    document.title = APPLICATION_TITLE;

    // reference the main container
    let mainContainer = document.getElementById( "mainContainer" );

    // create redux store
    let store = Redux.createStore(
        Reducer.globalReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.dispatch( Action.createTask( "Müll rausbringen" ) );
    store.dispatch( Action.createTask( "Abwaschen"        ) );
    store.dispatch( Action.createTask( "Wäsche waschen"   ) );

    // render App component into main container
    ReactDOM.render(

        <ReactRedux.Provider store={ store }>

            <App
                title={ APPLICATION_TITLE }
            />

        </ReactRedux.Provider>,
        mainContainer
    );
