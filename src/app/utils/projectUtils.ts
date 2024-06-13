const projectUtils = {

    getArgument : (dataInput:unknown , argument:string) => {
        if (dataInput && typeof dataInput === "object" && dataInput !== null) {
            let argumentValue;
            Object.keys(dataInput).forEach((value,index) => {
                if (value === argument) {
                    argumentValue = Object.values(dataInput)[index]
                }
                return
            })
            return argumentValue
        }
    }
}
Object.freeze(projectUtils)
export default projectUtils