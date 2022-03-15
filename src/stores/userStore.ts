import { Action, createStore } from "redux";

interface User {
    userName?: string;
    email?: string;
    address?: string;
    age?: number;
}

function user(state: User = {
    userName: undefined,
    email: undefined,
    address: undefined,
    age: undefined,
}, action: Action<any>): User {
    switch (action.type) {
        case 'INITIALIZE':
            return {
                userName: 'Test',
                email: 'test@gmail.com',
                address: 'test',
                age: 0 
            }
        case 'SET_USER':
            return {
                userName: 'TERA',
                email: 'tera@gmail.com',
                address: 'Guro',
                age: 23 
            }
        default:
            return state;
    }
}

const userStore = createStore(user)


userStore.subscribe(() => console.log(userStore.getState()));

export default userStore;