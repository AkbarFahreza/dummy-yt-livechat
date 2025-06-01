![gambar](https://github.com/user-attachments/assets/48678435-13da-4331-8372-894e1581cc23)

# YouTube Livechat Dummmy Tester

This is YouTube dummy chat to test your customize YouTube chat CSS for streaming
purposes.

Go to : https://rzytblc.netlify.app/

**In This DOCS:**

- [General Info](#youtube-livechat-dummmy-tester)
- [JSON template](#json-template)
- [Tools That I Use](#tools-that-i-use)
- [Youtube custom CSS Tips & Tricks](#youtube-chat-custom-css-tips--tricks)
- [Update Logs](#update-logs)

# JSON Template

This is a JSON template for configurating Author name on Youtube chat
dummy/tester

```json
{
  "general-chat": {
    "viewer": {
      "author-name-viewer1": "Dekreza",
      "author-name-viewer2": "Dekreza2",
      "author-name-viewer3": "Dekreza3",
      "author-name-viewer4": "Dekreza4"
    },
    "moderator": {
      "author-name-moderator1": "Dekreza Mod",
      "author-name-moderator2": "Dekreza Mod2",
      "author-name-moderator3": "Dekreza Mod3"
    },
    "member": {
      "author-name-member1": "Member Reza1",
      "author-name-member2": "Member Reza",
      "author-name-member3": "Member Reza"
    },
    "owner": {
      "author-name-owner1": "Owner Reza1",
      "author-name-owner2": "Owner Reza2",
      "author-name-owner3": "Owner Reza3",
      "author-name-owner4": "Owner Reza4"
    }
  },
  "superchat": {
    "author-name-Superchat1": "asas",
    "author-name-Superchat2": "asasa",
    "author-name-Superchat3": "asasasas",
    "author-name-SuperSticker1": "asd",
    "author-name-SuperSticker2": "wew"
  }
}
```

you must only change the value <br/> example :

- change author name viewer 1 value Dekreza into Asep Yukimura
- change author name viewer 2 value Dekreza2 into Asep Yukimura masak

```json
{
 "general-chat": {
   "viewer": {
     "author-name-viewer1": "Dekreza",
     "author-name-viewer2": "Dekreza2",
     "author-name-viewer3": "Dekreza3"
     "author-name-viewer4": "Dekreza4"
```

```json
{
  "general-chat": {
    "viewer": {
      "author-name-viewer1": "Asep Yukimura",
      "author-name-viewer2": "Asep Yukimura masak",
      "author-name-viewer3": "Dekreza3"
      "author-name-viewer4": "Dekreza4"
```

# Tools That I Use

- Designing : [Figma](https://www.figma.com)
- Coding : [VSCode](https://code.visualstudio.com/)
- Convert PNG -> Base64 : [Base64-image](https://www.base64-image.de/)
- Convert SVG -> Base64 :
  [yoksel.github.io/url-encoder](https://yoksel.github.io/url-encoder/)

# Youtube Chat custom CSS Tips & Tricks

Centering event text on header

> Membership Event : Member Gift, Member Join, Member Achievement

```css
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

```css
yt-live-chat-paid-message-renderer #single-line * {
  text-align: center !important;
  margin: auto !important;
}
yt-live-chat-paid-message-renderer #single-line {
  display: flex !important;
  flex-direction: column !important;
}
```

Iimportiingg fonts from loal (Installed Fonts)

```css
/* Next Bro is example font*/

@font-face {
  font-family: "Next Bro";
  src: url("Next Bro.ttf");
  src: local("Next Bro"), local("Next Bro"),
    url("Next Bro.ttf") format("truetype");
}

:root {
  --FontFams: "Next Bro", sans-serif;
}
```

Remove like button on the superchat

```css
#action-buttons {
  display: none !important;
}
```

Special code

```css
ytd-sponsorships-live-chat-header-renderer #primary-text,
yt-live-chat-membership-item-renderer #header-primary-text,
yt-live-chat-membership-item-renderer #header-subtext {
  font-family: var(--FontFams) !important;
  font-size: 18px !important;
  font-weight: 700 !important;
}

yt-live-chat-membership-item-renderer:not([show-only-header]) #header-subtext {
  display: none !important;
}
```

# Update Logs

- _1 May 2024_ :
  - **superchat** Removing "show-only-header" and "is-v2-style" attribute,
    adding like button on superchat.
- _2 February 2025_ :
  - **Main page** Added CSS Editor for on-site editing.
- _23 April 2025_ :
  - **Main page** Added Author name configuration to personalize the preview
    test to your audience.
- _01 June 2025_ :
  - Added resizable between preview and code editor
  - Changed the editor theme to Cattpuccin Mocha
  - Restyling autocomplete hints
