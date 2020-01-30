function check(dictionary) {
    return dictionary.every(item => typeof item === "string");
}

function calculateFrequencies(input, dictionary) {
    if (typeof input !== "string") {
        throw new Error(`Input should be a string`);
    }
    if (check(dictionary) === true) {
        // let arr = input.split("the");
        let isThe = input.indexOf("the");

        let arr = input.split(" ");
        let result = {};
        arr.forEach(item => {
            if (dictionary.includes(item.toLowerCase()) === true) {
                return;
            }
            else {
                result[item.toLowerCase()] = 1;
            }

        });
        const keys = Object.keys(result);
        const size = Object.keys(result).length;
        for (const key of keys) {
            // console.log(result[key], Object.keys(result).length);
            result[key] = result[key] / size;
        }
        return result;
        // if (isThe === -1) {
        //     let arr = input.split(" ");
        //     let result = {};
        //     arr.forEach(item => {
        // if (result[item]) {
        //     result[item] = result[item]++;
        // }
        //         else {
        //             result[item] = 1;
        //         }
        //     });
        //     arr.forEach(item => {
        //         result[item] = result[item] / arr.length;
        //     });

        //     console.log(result);
        //     return result;
        // }
    }
    else {
        throw new Error(`Invalid dictionary format`);
    }
}

const app = {
    calculateFrequencies
};

module.exports = app;
