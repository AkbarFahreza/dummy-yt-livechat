function superChatButton(id, color) {
  // superchat render button
  //T stands for Tier, e.g. T1 = Tier1
  const superchat = `<button class="button btnOnSC" id=${id} style="max-width: 26px; max-height: auto; background-color:${color};">
                <img style="width: 100%; height: 100%" src="src/sc-icon.svg">
              </button>`;
  return superchat;
}

function renderButtons() {
  const viewerIcon = ImageAssets().ViewerBtnIcon;
  const ownerIcon = ImageAssets().OwnerBtnIcon;
  const modIcon = ImageAssets().ModeratorBtnIcon;
  const memberIcon = ImageAssets().MemberBtnIcon;

  // general chat render button
  const viewerChat = `<button class="button btnOn" id="render-viewer-chat">${viewerIcon}</button>`;
  const moderatorChat = `<button class="button btnOn" id="render-moderator-chat">${modIcon}</button>`;
  const memberChat = `<button class="button btnOn" id="render-member-chat">${memberIcon}</button>`;
  const ownerChat = `<button class="button btnOn" id="render-owner-chat">${ownerIcon}</button>`;

  const buttonsHtml = `
        <div class="renderBtn" style="display: flex; flex-direction: row; justify-content: center;">
          <div id="buttons">

            <div class="container">
              <button class="btn" id="render-random-chat">
              ${viewerIcon}
              </button>     
              <button id="button1" class="opt" onclick="toggleButtons('button1')">></button>
              <div id="toggleButtons1" class="toggle-buttons">
              ${ownerChat}
              ${moderatorChat}
              ${memberChat}
              ${viewerChat}
              </div>
            </div>
         
            <div class="container">
         
              <button class="btn" style="max-width: 40px; max-height: auto" id="render-random-suppa">
                <img style="width: 100%; height: 100%" src="src/sc-icon.svg" />
              </button>
   
              <button id="button2" class="opt" onclick="toggleButtons('button2')">></button>
        
              <div id="toggleButtons2" class="toggle-buttons">
              ${superChatButton(
                "render-tier1-superchat",
                "rgba(30, 136, 229, 1)"
              )}
              ${superChatButton(
                "render-tier2-superchat",
                "rgba(0, 229, 255, 1)"
              )}
              ${superChatButton(
                "render-tier3-superchat",
                "rgba(29, 233, 182, 1)"
              )}
              ${superChatButton(
                "render-tier4-superchat",
                "rgba(255, 202, 40, 1)"
              )}
              ${superChatButton(
                "render-tier5-superchat",
                "rgba(245, 124, 0, 1)"
              )}
              ${superChatButton(
                "render-tier6-superchat",
                "rgba(233, 30, 99, 1)"
              )}
              ${superChatButton(
                "render-tier7-superchat",
                "rgba(230, 33, 23, 1)"
              )}
              </div>
            </div>
            <div class="container">
              <button class="btn" id="render-random-memberevent">
               <img style="width: 18px; height: 18px" src="src/membership-icon.svg" />
              </button>
              <button id="button3" class="opt" onclick="toggleButtons('button3')">></button>
              <div id="toggleButtons3" class="toggle-buttons">
                <button class="button btnOn" id="render-membership">Member</button>
                <button class="button btnOn" id="render-membergift">Gift</button>
              </div>
            </div>
            <div class="container">
              <button class="btn" id="render-supersticker" style="border-radius: 5px;">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: auto; height: 20px;" class="style-scope yt-icon">
                  <g class="style-scope yt-icon">
                    <path d="M13.67,12.41l2.01-1.74l-2.65-0.23L12,8l-1.03,2.44l-2.65,0.23l2.01,1.74L9.72,15L12,13.63L14.27,15L13.67,12.41z M2,5v14 h15h0.41L22,14.41V14V5H2z M17,14v3.99L16.99,18H3V6h18v7.99L20.99,14H17z" fill="#fff" class="style-scope yt-icon"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="container">
              <button class="btn" id="toggle-editor" style="border-radius: 5px; margin-left: 10px !important;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_89_2)">
                    <path d="M14.62 2.66202C14.8098 2.71512 14.9873 2.80512 15.1423 2.92685C15.2973 3.04859 15.4268 3.19968 15.5234 3.37149C15.62 3.5433 15.6817 3.73246 15.7052 3.92816C15.7286 4.12386 15.7133 4.32226 15.66 4.51202L11.229 20.299C11.1216 20.6821 10.8664 21.0069 10.5195 21.2018C10.1727 21.3968 9.76259 21.4459 9.37948 21.3385C8.99638 21.2311 8.67163 20.9759 8.47669 20.6291C8.28174 20.2822 8.23257 19.8721 8.33998 19.489L12.771 3.70002C12.8242 3.5103 12.9143 3.33292 13.036 3.17802C13.1578 3.02312 13.3089 2.89373 13.4807 2.79725C13.6525 2.70076 13.8417 2.63907 14.0373 2.61569C14.233 2.59232 14.4313 2.60772 14.621 2.66102L14.62 2.66202ZM7.55998 6.69702C7.84088 6.97827 7.99866 7.35952 7.99866 7.75702C7.99866 8.15452 7.84088 8.53577 7.55998 8.81702L4.37998 12L7.56198 15.182C7.84324 15.4634 8.0012 15.845 8.00111 16.2429C8.00101 16.6407 7.84288 17.0223 7.56148 17.3035C7.28009 17.5848 6.89849 17.7427 6.50063 17.7426C6.10277 17.7426 5.72124 17.5844 5.43998 17.303L1.19698 13.06C0.91608 12.7788 0.758301 12.3975 0.758301 12C0.758301 11.6025 0.91608 11.2213 1.19698 10.94L5.43898 6.69702C5.57828 6.55763 5.74368 6.44705 5.92573 6.37161C6.10778 6.29617 6.30292 6.25734 6.49998 6.25734C6.69704 6.25734 6.89218 6.29617 7.07423 6.37161C7.25628 6.44705 7.42068 6.55763 7.55998 6.69702ZM16.44 8.81702C16.2926 8.67969 16.1744 8.51409 16.0924 8.33009C16.0104 8.1461 15.9664 7.94747 15.9628 7.74606C15.9592 7.54466 15.9963 7.3446 16.0717 7.15782C16.1472 6.97105 16.2595 6.80138 16.4019 6.65894C16.5443 6.5165 16.714 6.40421 16.9008 6.32877C17.0876 6.25333 17.2876 6.21628 17.489 6.21983C17.6904 6.22339 17.8891 6.26747 18.0731 6.34946C18.2571 6.43144 18.4227 6.54964 18.56 6.69702L22.803 10.939C23.0842 11.2203 23.2422 11.6018 23.2422 11.9995C23.2422 12.3973 23.0842 12.7787 22.803 13.06L18.561 17.303C18.4217 17.4424 18.2564 17.5529 18.0744 17.6283C17.8924 17.7038 17.6973 17.7426 17.5003 17.7426C17.3033 17.7427 17.1083 17.7039 16.9262 17.6286C16.7442 17.5532 16.5788 17.4428 16.4395 17.3035C16.3001 17.1643 16.1896 16.9989 16.1142 16.8169C16.0387 16.6349 15.9999 16.4399 15.9999 16.2429C15.9998 16.0459 16.0386 15.8508 16.1139 15.6688C16.1893 15.4867 16.2997 15.3214 16.439 15.182L19.621 12L16.44 8.81702Z" fill="white"/>
                  </g>
                      <defs>
                        <clipPath id="clip0_89_2">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                  </svg>
              </button>
            </div>
            <div class="container">
              <button class="btn" id="open-config" style="border-radius: 5px; margin-left: 10px !important;">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m234.67 85.33l-.004 213.338h-21.333v42.666h21.333l.005 85.33h42.666l-.004-85.33h21.333v-42.666h-21.333l.004-213.338zm-128.006 0v85.355H85.331v42.645h21.333v213.333h42.667V213.33h21.333v-42.645h-21.333V85.33zm255.981.004v128h-21.333l.013 42.663h21.333v170.666h42.688V255.997h21.333l-.013-42.663h-21.333l.013-128.004z"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
  // Append buttonsHtml to the desired element
  $("#render-chat-buttons").html(buttonsHtml);
  // ConfigPanel();
}
