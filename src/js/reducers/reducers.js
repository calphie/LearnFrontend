'use strict';
const initialState = {
    name: 'kenta'
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME1':
            return {
                name: "kenta1"
            };
        case 'CHANGE_NAME2':
            return {
                name: "kenta2"
            };
        case 'CHANGE_NAME3':
            return {
                name: "kenta3"
            };
        default :
            return state;
    }
}