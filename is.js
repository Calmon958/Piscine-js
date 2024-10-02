const is = {};
is.num = (value) => {
    return typeof value === 'number';
};
is.nan = (value) => {
    return Number.isNaN(value);
};
is.str = (value) => {
    return typeof value === 'string';
};
is.bool = (value) => {
    return typeof value === 'boolean';
};
is.undef = (value) => {
    return value === undefined;
};
is.def = (value) => {
    return value !== undefined;
};
is.arr = (value) => {
    return Array.isArray(value);
};
is.fun = (value) => {
    return typeof value === 'function';
};
is.truthy = (value) => {
    return !!value
};
is.falsy = (value) => {
    return !value;
};
is.obj = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value) && value !== 'function';
};
