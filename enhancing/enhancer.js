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
    const enhancement = item.enhancement === 20 ? 20 : ++item.enhancement;
    return { ...item, enhancement };
}

function fail(item) {
    if (item.enhancement >= 15) {
        item.enhancement = item.enhancement - 10;
    } else {
        item.enhancement = item.enhancement - 5
    }
    return { ...item };
}


function get(item) {
    return { ...item };
}
