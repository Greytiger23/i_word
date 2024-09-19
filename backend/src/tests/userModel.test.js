const mongoose = require('mongoose');
const User = require('../models/User');
const bycrypt = require('bycryptjs');

describe('User Model', () => {
    beforeAll(async () => {
        // set up in-memory database
        await mongoose.connect('monogodb://localhost:27017/test_db', {
            userNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    aferAll(async () => {
        await mongoose.disconnect();
    });

    it('should hash password before saving user', async () => {
        const user = new User({ username: 'john', email: 'john@test.com', password: '123456' });
        await user.save();

        const isMatch = await bycrypt.compare('123456', user.password);
        expect(isMatch).toBe(true);
    });
});