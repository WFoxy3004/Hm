export const searchFn = (query, text) => { 
    const reg = new RegExp(query, 'i')
    return reg.test(text) // true or false 
} 
