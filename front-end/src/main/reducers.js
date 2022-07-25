import { combineReducers } from "redux";
const rootReducer = combineReducers({
    todo: () => ({
        description: 'ler livro',
        list: [{
            _id: 1,
            description: 'Pagar Fatura',
            done: true
        }, {
            _id: 2,
            description: 'Reunião às 22',
            done: false
        }, {
            _id: 3,
            description: 'consulta',
            done: false
        }]
    })
})

export default rootReducer