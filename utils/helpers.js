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
//function to filter comments for user only on the feed
  ifEquals: function(a, b, options) {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",a,b)
    if (a === b) {
      console.log("matched ")
      return options.fn(this);
    }

    console.log(options.fn(this))

    return options.inverse(this);
  },

};