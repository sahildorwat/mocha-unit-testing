module.exports.add = (a, b) => a + b;
module.exports.asyncAdd = (a, b, callback) => {
    setTimeout( () => { 
        callback(a+b);
    }, 1000)
}
module.exports.square = (a) => a * a;

module.exports.asyncSqr = (a, callback) => {
    setTimeout( () => { 
        callback(a*a);
    }, 1000)
}
module.exports.setName = (user, name) => {
    const names = name.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
}
