getTwitters('tweet', { 
  id: '12506142', 
  count: 1, 
  enableLinks: true, 
  ignoreReplies: true, 
  clearContents: true,
  template: '<a href="http://twitter.com/%user_screen_name%/statuses/%id%/">%time%</a> "%text%" '
});
getTwitters('moretweets', { 
  id: '12506142', 
  count: 7, 
  enableLinks: true, 
  ignoreReplies: true, 
  clearContents: true,
  template: '<a href="http://twitter.com/%user_screen_name%/statuses/%id%/" class="date">%time%</a> "%text%" '
});
