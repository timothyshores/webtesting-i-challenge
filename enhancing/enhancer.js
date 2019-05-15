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
    const enhancement = item.enhancement >= 16
        ? item.enhancement - 1
        : item.enhancement;
    const durability = item.enhancement >= 15
        ? item.durability - 10
        : item.durability - 5;
    return { ...item, enhancement, durability };
}


function get(item) {
    return { ...item };
}
