const CREATE = '/remarks/create';
const READ = '/remarks/read';
const UPDATE = '/remarks/update';
const DELETE = '/remarks/delete';


const createRemark = (newRemark) => ({
    type: CREATE,
    payload: newRemark
});
const readRemarks = (remarks) => ({
    type: READ,
    payload: remarks
});
const updateRemark = (myRemark) => ({
    type: UPDATE,
    payload: myRemark
});
const deleteRemark = (remarkId) => ({
    type: DELETE,
    payload: remarkId
});


export const addRemark = (formData) => async (dispatch) => {
    const res = await fetch('/api/remarks/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (res.ok) {
        const newRemark = await res.json();
        dispatch(createRemark(newRemark));
        return newRemark;
    };
};

export const getRemark = () => async (dispatch) => {
    const res = await fetch('/api/remarks/');
    if (res.ok) {
        const remarks = await res.json();
        dispatch(readRemarks(remarks));
        return remarks;
    };
};

export const editRemark = (formData, remarkId) => async (dispatch) => {
    const res = await fetch(`/api/remarks/${remarkId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (res.ok) {
        const myRemark = await res.json();
        dispatch(updateRemark(myRemark));
        return myRemark;
    };
};

export const removeRemark = (remarkId) => async (dispatch) => {
    const res = await fetch(`/api/remarks/${remarkId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(deleteRemark(remarkId))
    };
};


const initialState = {};

const remarksReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE:
            newState = { ...state };
            newState = { ...newState, [action.payload.id]: action.payload };
            return newState;
        case READ:
            newState = { ...state };
            action.payload.remarks.forEach(el => {
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

export default remarksReducer;
