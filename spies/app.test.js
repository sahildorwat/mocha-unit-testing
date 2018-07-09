const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app')


describe('app', ()=> {
    var db = { saveUser: expect.createSpy() }
    app.__set__('db', db);
    
    it('should call the spy correctly', ()=> {
        var spy = expect.createSpy();
        spy('sahil');
        expect(spy).toHaveBeenCalledWith('sahil');
    })
    
    it('should call saveuser with user object', () => {
        app.handleSignUp('sss', 'aaa');
        expect(db.saveUser).toHaveBeenCalledWith({email: 'sss',password: 'aaa'})
    })

})

