import User from '../models/user';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().sort('-dateAdded').exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

/**
 * Save a User
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body.user.username || !req.body.user.firstname || !req.body.user.lastname || !req.body.user.email || !req.body.user.mobile || !req.body.user.password) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);

  // Let's sanitize inputs
  newUser.username = sanitizeHtml(newUser.username);
  newUser.firstname = sanitizeHtml(newUser.firstname);
  newUser.lastname = sanitizeHtml(newUser.lastname);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.mobile = sanitizeHtml(newUser.mobile);
  newUser.password = sanitizeHtml(newUser.password);

  newUser.cuid = cuid();
  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ user: saved });
    }
  });
}

/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  User.findOne({ cuid: req.params.cuid }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

/**
 * Delete a user
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {
  User.findOne({ cuid: req.params.cuid }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
    });
  });
}
