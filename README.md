# YouTube Livechat Dummmy Tester

This is YouTube dummy chat to test your customize YouTube chat CSS for streaming purposes.

Go to : https://rzytblc.netlify.app/

# Youtube custom CSS Tips & Tricks

Centering event text on header
  > Membership Event : Member Gift, Member Join, Member Achievement
``` css
ytd-sponsorships-live-chat-header-renderer #header-content-primary-column *,
yt-live-chat-membership-item-renderer #header-content-primary-column * {
  text-align: center !important;
}
ytd-sponsorships-live-chat-header-renderer #content,
yt-live-chat-membership-item-renderer #header-content-primary-column {
  margin: auto !important;
}
```
  > Superchat Event
``` css
yt-live-chat-paid-message-renderer #single-line * {
  text-align: center !important;
  margin: auto !important;
}
yt-live-chat-paid-message-renderer #single-line {
  display: flex !important;
  flex-direction: column !important;
}
```
