module.exports = function (app) {
  //   app.get("/api/friends", function (req, res) {
  //     return res.json(friends);
  //   });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    Friends.push(newFriend);

    res.json(newFriend);
  });
};
