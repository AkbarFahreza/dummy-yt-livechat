const Tier1 = [
  '<div id="card" class="style-scope yt-live-chat-paid-message-renderer"> <div id="header" class="style-scope yt-live-chat-paid-message-renderer"> <yt-img-shadow id="author-photo" height="40" width="40" class="style-scope yt-live-chat-paid-message-renderer no-transition" style="background-color: transparent;" loaded=""><img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" src="https://yt4.ggpht.com/1KqRN-uj2pOiaJqesu3o_rc2ogQmVc4RnjIf-1zTxO2OmYLPJrYbmP5K1pW6ngX9WTEXI20Q=s64-c-k-c0x00ffffff-no-rj" width="40" height="40"></yt-img-shadow> <dom-if restamp="" class="style-scope yt-live-chat-paid-message-renderer"><template is="dom-if"></template></dom-if> <dom-if class="style-scope yt-live-chat-paid-message-renderer"><template is="dom-if"></template></dom-if> <dom-if restamp="" class="style-scope yt-live-chat-paid-message-renderer"><template is="dom-if"></template></dom-if> <div id="header-content" class="style-scope yt-live-chat-paid-message-renderer"> <div id="menu" class="style-scope yt-live-chat-paid-message-renderer" hidden=""> <yt-icon-button id="menu-button" class="style-scope yt-live-chat-paid-message-renderer"><button id="button" class="style-scope yt-icon-button"> <yt-icon icon="more_vert" class="style-scope yt-live-chat-paid-message-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape"><div style="width: 100%; height: 100%; fill: currentcolor;"><svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg></div></icon-shape></yt-icon-shape></yt-icon> </button><yt-interaction id="interaction" class="circular style-scope yt-icon-button"><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></yt-icon-button> </div><div id="header-content-primary-column" class="style-scope yt-live-chat-paid-message-renderer"> <div id="author-name-chip" class="style-scope yt-live-chat-paid-message-renderer"> <yt-live-chat-author-chip disable-highlighting="" class="style-scope yt-live-chat-paid-message-renderer"><span id="prepend-chat-badges" class="style-scope yt-live-chat-author-chip"></span><span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip">Orang Orangan sawah<span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span></span><span id="chat-badges" class="style-scope yt-live-chat-author-chip"></span></yt-live-chat-author-chip> </div><div id="purchase-amount-column" class="style-scope yt-live-chat-paid-message-renderer"> <yt-img-shadow id="currency-img" height="16" width="16" class="style-scope yt-live-chat-paid-message-renderer no-transition" hidden=""><img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" width="16" height="16"></yt-img-shadow> <div id="purchase-amount" class="style-scope yt-live-chat-paid-message-renderer"> <yt-formatted-string class="style-scope yt-live-chat-paid-message-renderer">Rp10,000</yt-formatted-string> </div></div></div><span id="timestamp" class="style-scope yt-live-chat-paid-message-renderer">12:NaN AM</span> </div></div><div id="content" class="style-scope yt-live-chat-paid-message-renderer"> <div id="message" dir="auto" class="style-scope yt-live-chat-paid-message-renderer"></div><div id="input-container" class="style-scope yt-live-chat-paid-message-renderer"> <dom-if class="style-scope yt-live-chat-paid-message-renderer"><template is="dom-if"></template></dom-if> </div><yt-formatted-string id="deleted-state" class="style-scope yt-live-chat-paid-message-renderer" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string> <div id="footer" class="style-scope yt-live-chat-paid-message-renderer"></div></div></div>',
];
function T1Suppa() {
  const randomItem = Tier1[Math.floor(Math.random() * Tier1.length)];
  const newItem = document.createElement("yt-live-chat-paid-message-renderer");
  newItem.setAttribute(
    "class",
    "style-scope yt-live-chat-paid-message-renderer"
  );
  newItem.setAttribute("whole-message-clickable", "");
  newItem.setAttribute("id", "123");
  newItem.setAttribute("show-only-header", "");
  newItem.setAttribute(
    "style",
    "--yt-live-chat-paid-message-primary-color: rgba(30,136,229,1); --yt-live-chat-paid-message-secondary-color: rgba(21,101,192,1); --yt-live-chat-paid-message-header-color: rgba(255,255,255,1); --yt-live-chat-paid-message-timestamp-color: rgba(255,255,255,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(255,255,255,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(255,255,255,0.7019607843137254);"
  );
  newItem.setAttribute("allow-animations", "");
  newItem.innerHTML = randomItem;
  const container = document.getElementById("items");
  container.appendChild(newItem);
}
// function T1Suppa() {
//   const functions = [T2Suppa, T1HeaderOnly];
//   const rndmt1 = Math.floor(Math.random() * functions.length);
//   functions[rndmt1]();
// }
