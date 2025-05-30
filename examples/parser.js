/**
 * Parses a string into an array of numbers
 * The string can have groups separated by a comma
 * The string can have ranges separated by a dash
 * 
 * The input string "5, 8-10" would return [5, 8, 9, 10]
 * 
 * Returns null if the input isn't parsable
 * 
 * @param {string} input the number input that needs to be parsed
 * @returns an array of numbers sorted from lowest to highest
 */
 export const parseNumberInput = (input) => {
    // If it's not parseable, return null to indicate an error
    if(!(/^ *((\d+( *- *\d+)?) *(,|$) *)+$/).test(input)) return null;

    const results = [];

    // Loop over the comma-separated groups
    const groups = input.split(",").map(s => s.trim());
    for(const group of groups) {
        const range = group.split("-");
        // If it's not a range then add it to the result
        if(range.length === 1) {
            const toAdd = parseInt(range)
            if(!isNaN(toAdd)) results.push(toAdd);
        }
        else {
            // If it is a range, get all the numbers in the range
            const start = parseInt(range[0]);
            const end = parseInt(range[1]);

            // If it's a bad range, return null to indicate an error
            if(end < start) return null;

            // Add an array of all the numbers in the range
            results.push(...Array.from(new Array(end - start + 1), (_, i) => i + start))
        }
    }

    // Remove any duplicates and sort from lowest to highest
    return results.filter((n, i, array) => array.indexOf(n) === i).sort((a, b) => a - b);
}