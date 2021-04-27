const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        const token = createJWT(user)
        res.json(token)
        
      } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        res.status(400).json(err);
      }
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) throw new Error();
		await bcrypt.compare(req.body.password, user.password);
		const token = createJWT(user);
		res.json(token);
	} catch {
		res.status(400).json('Bad Credentials');
	}
}

module.exports = {
  create,
  login
}