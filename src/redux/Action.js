export function LapAction(inputType,inputValue){
    return {type:"SET_LAP",inputType:inputType,inputValue:inputValue}
}

export function RegAction(inputType,inputValue){
    return {type:"SET_REG",inputType:inputType,inputValue:inputValue}
}