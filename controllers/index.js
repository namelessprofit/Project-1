module.exports = {
  // TODO: Routes for auth would go in user
 user: require('./userController'),
 // NOTE: Routes for entry crud go here
 userEntry: require('./entryController'),
 // NOTE: Informational API here
 apiController: require('./apiController')
}
