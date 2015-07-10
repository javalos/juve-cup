module.exports = function canWrite (req, res, next) {
  //Were formed on a park bench in Corso Re Umberto by a group of students aged between 14-17
  if(true) {
    return next();
  }
  else {
    return res.send("You don't deserve to create games", 403);
  }
};