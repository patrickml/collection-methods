# collection-methods
Add Methods to your MeteorJS Collections

Examples of Use

    Posts = new Meteor.Collection('listings');
    
    Posts.methods({
      /**
       * Find all `Posts` that belong to the current user
       * @param query
       * @returns {*}
       */
      findWithUser : function(query) {
        var userId = Meteor.userId();//Find the loggedin User
    
        if(!userId) {
          throw new Meteor.Error('NO USER LOGGED IN', 422);//Throw an error if there is no user
        }
    
        //Check if there was no query passed
        if(typeof query === 'undefined')
          query = {}; //Set query to an empty object
    
        query.userId = user; //Set the query params userId to the userId we found above
        return this.find(query);
      },
      /**
       * Find all `Posts` where tags exist
       * @param query
       * @returns {*}
       */
      findWhereHasTags : function (query) {
        //Check if there was no query passed
        if(typeof query === 'undefined')
          query = {}; //Set query to an empty object
    
        query.tags = { $exists : true };
    
        return this.find(query);
      },
      /**
       * Find all `Posts` with a set of tags
       * @param query
       * @returns {*}
       */
      findWithTags : function (tags, query) {
        if(typeof query === 'undefined')
          query = {}; //Set query to an empty object
        
        query.tags = { $in : tags || [] };
        return this.find(query);
      }
    });