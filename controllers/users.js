const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login,
    getBooks,
    addbook,
    deleteBook
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    } catch (err) {
      return res.status(401).json(err);
    }
  }

async function getBooks(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.books);
  } catch (error) {
    res.json(error);
  }
}

async function addbook(req, res) {
  try {
    const user = await User.findById(req.params.id);
    user.books.push(req.body);
    await user.save();
    res.status(200).json(user.books);
  } catch (error) {
    res.send(error);
  }
}


async function deleteBook(req, res) {
  const user = await User.findById(req.params.userid);
  user.books.remove(req.params.bookid);
  await user.save();
  res.status(200).json(user.books);
}


function createJWT(user) {
    return jwt.sign(
      {user}, 
      SECRET,
      {expiresIn: '24h'}
    );
}