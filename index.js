

module.exports = {
    sum: (arr) => arr.reduce((acc, num) => acc + num, 0),

    removeDuplicates: (arr) => [...new Set(arr)],

    max: (arr) => Math.max(...arr),

    min: (arr) => Math.min(...arr),

    average: (arr) => arr.reduce((acc, num) => acc + num, 0) / arr.length,

    reverse: (arr) => [...arr].reverse(),

    unique: (arr) => arr.filter((value, index, self) => self.indexOf(value) === index),

    groupBy: (arr, key) => {
        return arr.reduce((acc, obj) => {
            const keyValue = obj[key];
            if (!acc[keyValue]) {
                acc[keyValue] = [];
            }
            acc[keyValue].push(obj);
            return acc;
        }, {});
    },

    chunk: (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    },

    flatten: (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(module.exports.flatten(val)) : acc.concat(val), [])
};
