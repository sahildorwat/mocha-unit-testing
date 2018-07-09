const utils = require('./utils')
const expect = require('expect')

it('should add 2 numbers', () => {
    const res = utils.add(2,4);
    // if (res !== 6) {
    //     throw new Error('incorrect sum');    
    // }
    expect(res).toBe(6).toBeA('number')
});

it('should add 2 numbers async', (done) => {
    utils.asyncAdd(2,4,(sum)=> {
        expect(sum).toBe(6).toBeA('number');
        done();
    });
});

it('should square the number', () => {
    const res = utils.square(2);
    // if( res !== 4){
    //     throw new Error(`expected square to be 5 but got ${res}`)
    // }
    expect(res).toBe(4).toBeA('number')
} );

it('should square the number async', (done) => {
    utils.asyncSqr(2, (res) => {
        expect(res).toBe(4).toBeA('number');
        done();
    });
    
} );

it('should include first and last name', () => {
    let user = { age: 25, location: "USA"}
    user = utils.setName(user, 'sahil dorwat');
    expect(user).toInclude({firstname: 'sahil', lastname: 'dorwat'})
} )