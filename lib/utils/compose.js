export const compose = ( ...args) => (payload) => {
    const validationStatus = {}
    let isValid = true

    if (args.filter((func) => typeof func === 'function').length !== args.length) {
        throw new Error('Invalid Type Error: Only pass functions as arguments')
    }
    
    const trace = (status, functionName) => {
        validationStatus[`${functionName}`] = status  
        if (!status) {
            isValid = false
        }     
    } 

    args = args.reduce((acc, fn) => {
        acc.push(fn)
        acc.push(trace)
        return acc
    }, [])

    args.reduce((acc, fn, idx) => {
        if (fn.name === "trace") {
            fn(acc, args[idx - 1].name)
            return acc
        }
        return fn(acc)
    }, payload)
    

    return {validationStatus, isValid}
}
