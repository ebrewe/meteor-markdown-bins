import { Meteor } from 'meteor/meteor';

import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('bins', function(){
    return Bins.find({ownerID: this.userId});
  });

  //for shared bins
  Meteor.publish('sharedBins', function(){
    //first get the user by the user ID so that we can
    //can get the email
    const user = Meteor.users.findOne(this.userId);

    if(!user){ return;}

    const email = user.emails[0].address;

    //look through bins, look at the shared With
    //go through that array and find a match that $eq (equals) our email.
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email}}
    });
  });
});
