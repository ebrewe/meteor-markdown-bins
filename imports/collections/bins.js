import { Mongo } from 'meteor/mongo';

/*
//SCHEMA
{
  'createdAt': timestamp -- when bin was created
  'content': raw markdown content
  'ownerID': ID -- bucket owner
  'sharedWith': array -- who has access (emails)
}
*/

//insert
Meteor.methods({
  'bins.insert': function(){
    return Bins.insert({
        createdAt: new Date(),
        content: '',
        sharedWith: [],
        ownerID: this.userId
    })
  },

  'bins.remove': function(bin){
    return Bins.remove(bin);
  },

  'bins.update': function(bin, newContent){
    return Bins.update(bin._id, {$set: {content: newContent} }); //mongo modifiers are back!
    // if we change to (bin, content), can use es6: ...update(bin._id, {$set: {content}});
  }
});

export const Bins = new Mongo.Collection('bins');
