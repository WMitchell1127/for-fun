const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const SET_FONT = 'SET_FONT'
const SET_THEME = 'SET_THEME'

const addTodo = (todo) =>{
    todo.id = uuidv4()
    return {
        type: ADD_TODO,
        payload: todo
    }
}
const deleteTodo = (id) =>{
    return {
        type: DELETE_TODO,
        payload: id
    }
}

const updateTodo = (todo) =>{
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}

const setFont = (font) =>{
    return {
        type: SET_FONT,
        payload: font
    }
}

const setTheme = (theme) =>{
    return {
        type: SET_THEME,
        payload: theme
    }
}

const initialState = {
    todos,
    font : 'default-txt',
    theme : 'default-theme'
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos : [action.payload, ...state.todos]
            }
        case DELETE_TODO:
            let oneLessTodo = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos : oneLessTodo
            }
        case UPDATE_TODO:
            let youveChanged = state.todos.map(todo => {
                if(todo.id === action.payload.id){
                    todo.task = action.payload.task
                }
                return todo
            })
            return {
                ...state,
                todos : youveChanged
            }
        case SET_FONT:
            return {
                ...state,
                font : action.payload
            }
        case SET_THEME:
            return {
                ...state,
                theme : action.payload
            }
        default:
            return state
    }
}

const store = Redux.createStore(rootReducer)
store.subscribe(()=>console.log(store.getState()))


