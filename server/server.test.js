const request = require('supertest');
const expect = request('expect');

var app = require('./server').app

describe('server', () => {
    it('should respond with Welcome sahil message', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect({
                error: "Page not found."
            })
            .end(done);
    });
})


// it('should include sahil user', (done) => {
//     request(app)
//         .get('/users')
//         .expect(200)
//         .expect( (res) => {
//             expect(res.body).toInclude({ name: sahil , age: 23});
//         })
//         .end(done);
// })

// it('should return my user object', (done) => {
//     request(app)
//       .get('/users')
//       .expect(200)
//       .expect((res) => {
//         expect(res.body).toInclude({
//           name: 'sahil',
//           age: 23
//         });
//       })
//       .end(done);
//   });