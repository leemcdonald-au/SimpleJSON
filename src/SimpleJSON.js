// Object Symbols.
const s = { raw: Symbol('raw'), value: Symbol('value'), error: Symbol('error') }

// Export a class to handle JSON errors.
export default class SimpleJSON {
    // Nothing fancy here.
    constructor(supplied) { 
        // Bind default values.
        this[s.value]   = { string: null, object: null }
        this[s.error]   = null

        // Bind the supplied value to the object for use.
        this[s.raw] = supplied
        
        // If provided a value, process it.
        switch(typeof this.raw) {
            case 'string':  return this.parse()
            case 'object':  return this.build()
            default:        throw new Error('Unknown input type.')
        }
    }

    // Parse a string into a JSON object. I don't like try {} catch() {}. But it's the only way I've found to handle this beast.
    parse() {
        // Attempt to parse or bind the error.
        try             { this[s.value].object = JSON.parse(this.string || this.raw) }
        catch(error)    { this[s.error] = error }

        // Run the other half.
        if(!this.string) { this.build() }
    }

    // Parse a JSON object into a string.
    build() { 
        // Attempt to stringify or bind the error.
        try             { this[s.value].string = JSON.stringify(this.object || this.raw) }
        catch(error)    { this[s.error] = error }

        // Run the other half.
        if(!this.object) { this.parse() }
    }

    // Getters.
    get error()     { return this[s.error] }
    get raw()       { return this[s.raw] }
    get object()    { return this[s.value].object }
    get string()    { return this[s.value].string }
}