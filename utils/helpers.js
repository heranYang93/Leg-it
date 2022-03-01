module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_time: (date) => {
    // 'toLocaleTimeString()' formats the time as H:MM:SS AM/PM
    return Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
    // return date.toLocaleTimeString();
  },

  post_time: (date) => {
    return Intl.DateTimeFormat('en-GB', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
    }).format(new Date(date));
    // return date.toLocaleTimeString();
  },

  //function to filter comments for user only on the feed
  ifEquals: function (a, b, options) {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', a, b);
    if (a === b) {
      console.log('matched ');
      return options.fn(this);
    }

    console.log(options.fn(this));

    return options.inverse(this);
  },


// a limited 'each' loop.
// usage: {{#limit items offset="1" limit="5"}} : items 1 thru 6
// usage: {{#limit items limit="10"}} : items 0 thru 9
// usage: {{#limit items offset="3"}} : items 3 thru context.length
// defaults are offset=0, limit=5
limit: function(context, block) {
  var ret = "",
      offset = parseInt(block.hash.offset) || 0,
      limit = parseInt(block.hash.limit) || 5,
      i = (offset < context.length) ? offset : 0,
      j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

  for(i,j; i<j; i++) {
    ret += block(context[i]);
  }

  return ret;
},

limitEach: function(ary, max, options) {
  if(!ary || ary.length == 0)
      return options.inverse(this);

  var result = [ ];
  for(var i = 0; i < max && i < ary.length; ++i)
      result.push(options.fn(ary[i]));
  return result.join('');
},

};
