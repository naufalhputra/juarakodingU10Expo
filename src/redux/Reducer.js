import { combineReducers } from "redux"

const LapState = {
    id:0,
    nama: "",
    kejadian: "",
    alamat: "",
    keterangan: "",
    status:"",
    gambar: "",
    latitude: 0.0,
    longitude: 0.0,
    time: "",
    }

const RegisterState = {
    id:0,
    name:"",
    email:"",
    phone:"",
    address:"",
    password:"",

    isLogin:false
}

function LapReducer (state=LapState,action){
    if(action.type === "SET_LAP"){
        return {
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

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
    LapReducer,
})

export default reducer
