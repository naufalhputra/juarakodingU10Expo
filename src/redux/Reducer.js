import { combineReducers } from "redux"

// const bukuState = {
//     id:0,
//     judulBuku:"",
//     jumlahHalaman:0,
//     namaPenulis:""
// }

const RegisterState = {
    id:0,
    name:"",
    email:"",
    phone:"",
    address:"",
    password:"",

    isLogin:false
}

// function BukuReducer (state=bukuState,action){
//     if(action.type === "SET_BUKU"){
//         return {
//             ...state,
//             [action.inputType]:action.inputValue
//         }
//     }
//     return state;
// }

function RegisterReducer(state=RegisterState,action){
    if(action.type==="SET_REG"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

const reducer = combineReducers({
    RegisterReducer,

})

export default reducer