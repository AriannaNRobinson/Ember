const CREATE = '/chants/create';
const READ = '/chants/read';
const UPDATE = '/chants/update';
const DELETE = '/chants/delete';


const createChant = (newChant) => ({
    type: CREATE,
    payload: newChant
});
const readChants = (chants) => ({
    type: READ,
    payload: chants
});
const updateChant = (myChant) => ({
    type: UPDATE,
    payload: myChant
});
const deleteChant = (chantId) => ({
    type: DELETE,
    payload: chantId
});


export const addChant = (formData) => async (dispatch) => {
    const res = await fetch('/api/chants/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (res.ok) {
        const newChant = await res.json();
        dispatch(createChant(newChant));
        return newChant;
    };
};

export const getChant = () => async (dispatch) => {
    const res = await fetch('/api/chants/');
    if (res.ok) {
        const chants = await res.json();
        dispatch(readChants(chants));
        return chants;
    };
};

export const editChant = (formData, chantId) => async (dispatch) => {
    const res = await fetch(`/api/chants/${chantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (res.ok) {
        const myChant = await res.json();
        dispatch(updateChant(myChant));
        return myChant;
    };
};

export const removeChant = (chantId) => async (dispatch) => {
    const res = await fetch(`/api/chants/${chantId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(deleteChant(chantId))
    };
};


const initialState = {};

const chantsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE:
            newState = { ...state };
            newState = { ...newState, [action.payload.id]: action.payload };
            return newState;
        case READ:
            newState = { ...state };
            action.payload.chants.forEach(el => {
                newState[el.id] = el;
            })
            return newState;
        case UPDATE:
            newState = { ...state };
            newState = { ...newState, [action.payload.id]: action.payload };
            return newState;
        case DELETE:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    };
};

export default chantsReducer;
