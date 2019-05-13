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
    const enhancement = item.enhancement + 1;
    return { ...item, enhancement };
}

function fail(item) {
    return { ...item };
}


function get(item) {
    return { ...item };
}
