const userController = require('../controllers/userController');
const expect = require('chai').expect;

describe('UserController', () => {
    it('should return all users', () => {
        const users = userController.getUsers();
        expect(users).to.be.a('array');
        expect(users.length).to.be.eql(2);
        expect(users[0]).to.have.property('name').eql('John');
        expect(users[1]).to.have.property('name').eql('Jane');
    });
});