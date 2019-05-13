module.exports = {
    succeed,
    fail,
    repair,
    get,
};

function repair(item) {
    return { ...item, durability: 100 };
}

function succeed(item) {
    return { ...item };
}

function fail(item) {
    return { ...item };
}


function get(item) {
    return { ...item };
}
