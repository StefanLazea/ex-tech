function applyBonus(employees, bonus) {
    return new Promise((expect, reject) => {
        if (typeof bonus === "number") {
            // if(bonus < )
        }
        else {
            reject(Error("Invalid bonus"));

        }
    })
}

let app = {
    applyBonus: applyBonus,
}

module.exports = app;
