$(document).ready(function () {
  renderButtons();
  // console.log(JSON.stringify(localStorage));
  const ProfilePicture = ImageAssets().profilePicture;
  const MemberBadge = ImageAssets().MemberBadge;

  // Get Chats Data
  const ViewerChat = GeneralChatsData(ProfilePicture).ViewerChat;
  const ModeratorChat = GeneralChatsData(
    ProfilePicture,
    MemberBadge
  ).ModeratorChat;
  const MemberChat = GeneralChatsData(ProfilePicture, MemberBadge).MemberChat;
  const OwnerChat = GeneralChatsData(ProfilePicture).OwnerChat;

  //===============================================================================
  //General Chat
  //===============================================================================

  function chatAttributes(element) {
    element.attr("class", "style-scope yt-live-chat-item-list-renderer");
    element.attr("whole-message-clickable", "");
    element.attr("id", "123");
  }

  // Render Random General Chats
  //============================
  function renderRandomChats() {
    const allChats = [
      renderViewerChats,
      renderMemberChats,
      renderModeratorChats,
      renderOwnerChats,
    ];

    const randomFunction =
      allChats[Math.floor(Math.random() * allChats.length)];
    const randomChat = randomFunction().randomItem;
  }
  $("#render-random-chat").on("click", renderRandomChats);

  // Render Viewer Chats
  //============================
  function renderViewerChats() {
    const randomItem =
      ViewerChat[Math.floor(Math.random() * ViewerChat.length)];
    const newItem = $(
      "<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>"
    );

    chatAttributes(newItem);
    newItem.attr("author-type", "");
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-viewer-chat").on("click", renderViewerChats);

  // Render Moderator Chats
  //============================
  function renderModeratorChats() {
    const randomItem =
      ModeratorChat[Math.floor(Math.random() * ModeratorChat.length)];
    const newItem = $(
      "<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>"
    );

    chatAttributes(newItem);
    newItem.attr("author-type", "moderator");
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-moderator-chat").on("click", renderModeratorChats);

  // Render Member Chats
  //============================
  function renderMemberChats() {
    const randomItem =
      MemberChat[Math.floor(Math.random() * MemberChat.length)];
    const newItem = $(
      "<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>"
    );

    chatAttributes(newItem);
    newItem.attr("author-type", "member");
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-member-chat").on("click", renderMemberChats);

  // Render Owner Chats
  //============================
  function renderOwnerChats() {
    const randomItem = OwnerChat[Math.floor(Math.random() * OwnerChat.length)];
    const newItem = $(
      "<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>"
    );

    chatAttributes(newItem);
    newItem.attr("author-is-owner", "");
    newItem.attr("author-type", "owner");
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-owner-chat").on("click", renderOwnerChats);

  //===============================================================================
  //SUPERCHAT
  //===============================================================================
  function suppaAttributes(element) {
    element.attr("class", "style-scope yt-live-chat-item-list-renderer");
    element.attr("modern", "");
    element.attr("id", "123");
    element.attr("whole-message-clickable", "");
    element.attr("allow-animation", "");
  }
  // Render Random Suppa
  function renderRandomSuppa() {
    const allChats = [
      renderSuperchatTier1,
      renderSuperchatTier2,
      renderSuperchatTier3,
      renderSuperchatTier4,
      renderSuperchatTier5,
      renderSuperchatTier6,
      renderSuperchatTier7,
    ];

    const randomFunction =
      allChats[Math.floor(Math.random() * allChats.length)];
    const randomChat = randomFunction().randomItem;
  }
  $("#render-random-suppa").on("click", renderRandomSuppa);

  // Tier1
  function renderSuperchatTier1() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$1,00"
    ).suppaData;
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(30,136,229,1); --yt-live-chat-paid-message-secondary-color: rgba(21,101,192,1); --yt-live-chat-paid-message-header-color: rgba(255,255,255,1); --yt-live-chat-paid-message-timestamp-color: rgba(255,255,255,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(255,255,255,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(255,255,255,0.7019607843137254); --yt-live-chat-text-input-background-color: rgba(0,0,0,0.18823529411764706);"
    );
    newItem.html(SuppaData[0]);
    $("#items").append(newItem);
    return { item: SuppaData[0] };
  }
  $("#render-tier1-superchat").on("click", renderSuperchatTier1);

  // Tier2
  function renderSuperchatTier2() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "Rp20,000"
    ).suppaData;
    const randomItem = SuppaData[Math.floor(Math.random() * SuppaData.length)];
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(0,229,255,1); --yt-live-chat-paid-message-secondary-color: rgba(0,184,212,1); --yt-live-chat-paid-message-header-color: rgba(0,0,0,1); --yt-live-chat-paid-message-timestamp-color: rgba(0,0,0,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(0,0,0,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(0,0,0,0.7019607843137254); --yt-live-chat-text-input-background-color: rgba(255,255,255,0.18823529411764706);"
    );
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-tier2-superchat").on("click", renderSuperchatTier2);
  // Tier3
  function renderSuperchatTier3() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$10"
    ).suppaData;
    const randomItem = SuppaData[Math.floor(Math.random() * SuppaData.length)];
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(29,233,182,1); --yt-live-chat-paid-message-secondary-color: rgba(0,191,165,1); --yt-live-chat-paid-message-header-color: rgba(0,0,0,1); --yt-live-chat-paid-message-timestamp-color: rgba(0,0,0,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(0,0,0,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(0,0,0,0.5411764705882353);--yt-live-chat-paid-message-primary-color: rgba(29,233,182,1); --yt-live-chat-paid-message-secondary-color: rgba(0,191,165,1); --yt-live-chat-paid-message-header-color: rgba(0,0,0,1); --yt-live-chat-paid-message-timestamp-color: rgba(0,0,0,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(0,0,0,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(0,0,0,0.5411764705882353);"
    );
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-tier3-superchat").on("click", renderSuperchatTier3);
  // Tier4
  function renderSuperchatTier4() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "Rp100,000"
    ).suppaData;
    const randomItem = SuppaData[Math.floor(Math.random() * SuppaData.length)];
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(255,202,40,1); --yt-live-chat-paid-message-secondary-color: rgba(255,179,0,1); --yt-live-chat-paid-message-header-color: rgba(0,0,0,0.8745098039215686); --yt-live-chat-paid-message-timestamp-color: rgba(0,0,0,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(0,0,0,0.8745098039215686); --yt-live-chat-disable-highlight-message-author-name-color: rgba(0,0,0,0.5411764705882353);"
    );
    newItem.html(randomItem);

    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-tier4-superchat").on("click", renderSuperchatTier4);
  // Tier5
  function renderSuperchatTier5() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$20"
    ).suppaData;
    const randomItem = SuppaData[Math.floor(Math.random() * SuppaData.length)];
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(245,124,0,1); --yt-live-chat-paid-message-secondary-color: rgba(230,81,0,1); --yt-live-chat-paid-message-header-color: rgba(255,255,255,0.8745098039215686); --yt-live-chat-paid-message-timestamp-color: rgba(255,255,255,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(255,255,255,0.8745098039215686); --yt-live-chat-disable-highlight-message-author-name-color: rgba(255,255,255,0.7019607843137254);"
    );
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-tier5-superchat").on("click", renderSuperchatTier5);
  // Tier6
  function renderSuperchatTier6() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$50"
    ).suppaData;
    const randomItem = SuppaData[Math.floor(Math.random() * SuppaData.length)];
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(233,30,99,1); --yt-live-chat-paid-message-secondary-color: rgba(194,24,91,1); --yt-live-chat-paid-message-header-color: rgba(255,255,255,1); --yt-live-chat-paid-message-timestamp-color: rgba(255,255,255,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(255,255,255,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(255,255,255,0.7019607843137254);"
    );
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-tier6-superchat").on("click", renderSuperchatTier6);
  // Tier7
  function renderSuperchatTier7() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$100"
    ).suppaData;
    const randomItem = SuppaData[Math.floor(Math.random() * SuppaData.length)];
    const newItem = $(
      "<yt-live-chat-paid-message-renderer></yt-live-chat-paid-message-renderer>"
    );

    suppaAttributes(newItem);
    newItem.attr(
      "style",
      "--yt-live-chat-paid-message-primary-color: rgba(230,33,23,1); --yt-live-chat-paid-message-secondary-color: rgba(208,0,0,1); --yt-live-chat-paid-message-header-color: rgba(255,255,255,1); --yt-live-chat-paid-message-timestamp-color: rgba(255,255,255,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(255,255,255,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(255,255,255,0.7019607843137254);"
    );
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-tier7-superchat").on("click", renderSuperchatTier7);

  //===============================================================================
  //Membership Event
  //===============================================================================
  function RenderMembership() {
    const MembershipData = MembershipEventData(
      ProfilePicture,
      MemberBadge
    ).MembershipData;
    const randomItem =
      MembershipData[Math.floor(Math.random() * MembershipData.length)];
    const newItem = $(
      "<yt-live-chat-membership-item-renderer></yt-live-chat-membership-item-renderer>"
    );
    // if selected membership data doesn't have message (header only), add show-only-header
    const isHeaderOnly =
      randomItem === MembershipData[0]
        ? "show-only-header"
        : "has-primary-text";
    newItem.attr("class", "style-scope yt-live-chat-item-list-renderer");
    newItem.attr(isHeaderOnly, "");
    newItem.attr("id", "123");
    newItem.html(randomItem);
    $("#items").append(newItem);
    return { randomItem };
  }
  $("#render-membership").on("click", RenderMembership);

  //===============================================================================
  //Membergift Event
  //===============================================================================
  function RenderMembergift() {
    let GiftTotal = 3;

    const MembergiftData = MembergiftEventData(
      ProfilePicture,
      MemberBadge,
      GiftTotal
    ).MembergiftData;
    const GiftRedemptionData = MembergiftEventData(
      ProfilePicture,
      MemberBadge
    ).GiftRedemptionData;

    const newItem = $(
      "<ytd-sponsorships-live-chat-gift-purchase-announcement-renderer></ytd-sponsorships-live-chat-gift-purchase-announcement-renderer>"
    );

    newItem.attr("class", "style-scope yt-live-chat-item-list-renderer");
    newItem.attr("id", "123");
    newItem.html(MembergiftData);
    $("#items").append(newItem);

    // render the gift redemption event
    setTimeout(() => {
      for (let i = 0; i < GiftTotal; i++) {
        setTimeout(() => {
          $("#items").append(GiftRedemptionData);
        }, i * 100);
      }
    }, 100);
    return { MembergiftData };
  }
  $("#render-membergift").on("click", RenderMembergift);

  // render random membership event
  $("#render-random-memberevent").on("click", () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      RenderMembership();
    } else if (random === 1) {
      RenderMembergift();
    }
  });

  //===============================================================================
  //Supersticker Event
  //===============================================================================

  function RenderSupersticker() {
    const SuperstickerData = superStickerData(
      ProfilePicture,
      MemberBadge
    ).superStickerItems;
    const newItem =
      SuperstickerData[Math.floor(Math.random() * SuperstickerData.length)];
    $("#items").append(newItem);
  }
  $("#render-supersticker").on("click", RenderSupersticker);
  //===============================================================================
  //Toggle show editor
  //===============================================================================

  function toggleEditor() {
    const $editor = $("#css-editor-wrapper");
    const $chatPreview = $("yt-live-chat-app");
    $editor.css("display", $editor.css("display") === "none" ? "flex" : "none");
    $chatPreview.css("width", $editor.css("width") === "100%" ? "40%" : "100%");
  }
  $("#toggle-editor").on("click", toggleEditor);

  //===============================================================================
  //configuration Panel
  //===============================================================================
  const configGroups = {
    "General Chat": {
      viewer: 4,
      moderator: 3,
      member: 3,
      owner: 4,
    },
    Superchat: {
      Superchat: 3,
      SuperSticker: 2,
    },
  };

  function toggleConfig() {
    let $panel = $("#config-panel");

    if ($panel.length === 0) {
      $panel = $(`
        <div id="config-panel" style="display: flex;">
          <div id="config-wrapper">
          <p>Paste template configuration</p>
          <textarea id="jsonInput" rows="5" cols="5" placeholder="Paste JSON here"></textarea>
          <div style="display:flex; flex-direction: row; gap: 5px;">
            <button onclick="handleImport()" class="btn">Import JSON</button>
            <a href="https://github.com/AkbarFahreza/dummy-yt-livechat?tab=readme-ov-file#json-template" class="btnOn">Need a guide?</a>
          </div>
            <h3 style="font-size: 15px; font-weight: 600">Author Namee Configuration</h3>
            <div id="group-container"></div>
            <div id="config-btn">
              <button id="save-btn" class="btn">Save</button>
              <button id="reset-btn" class="btn dismiss-btn">Reset</button>
            </div>
            <p style="color: red;">* This is a YouTube Live Chat CSS testing tool using dummy data. Not affiliated with YouTube.</p>
          </div>
        </div>

      `);

      $("body").append($panel);
      generateInputs();
      initConfigHandlers();
    }

    $panel.toggle();
  }

  $("#open-config").on("click", toggleConfig);

  function generateInputs() {
    const container = $("#group-container");
    container.empty();

    for (const [groupName, roles] of Object.entries(configGroups)) {
      const groupId = groupName.toLowerCase().replace(/\s+/g, "-");

      const group = $(`
        <div class="group-section">
          <div class="group-header" data-target="#${groupId}-content">
            <h4>${groupName}</h4>
            <span class="toggle-icon">></span>
          </div>
          <div class="group-content" id="${groupId}-content"></div>
        </div>
      `);

      const groupContent = group.find(".group-content");

      for (const [type, count] of Object.entries(roles)) {
        const roleId = `${groupId}-${type}`;

        const roleSection = $(`
          <div class="role-section">
            <div class="role-header" data-target="#${roleId}-content">
              <h5>${type.charAt(0).toUpperCase() + type.slice(1)}</h5>
              <span class="toggle-icon">></span>
            </div>
            <div class="role-content" id="${roleId}-content"></div>
          </div>
        `);

        const roleContent = roleSection.find(".role-content");

        for (let i = 1; i <= count; i++) {
          const fullType = count > 1 ? `${type}${i}` : type;
          const stored =
            localStorage.getItem(`author-name-${fullType}`) || "nama pengguna";

          const item = $(`
            <div class="general-chat-config-item">
              <p>${type} ${count > 1 ? i : ""}</p>
              <div class="author-name" author-type="${fullType}">${stored}</div>
              <input type="text" id="input-${fullType}" placeholder="${type}..." value="${
            stored !== "nama pengguna" ? stored : ""
          }" />
            </div>
          `);

          roleContent.append(item);
        }

        groupContent.append(roleSection);
      }

      container.append(group);
    }

    // Toggle for group level
    $(".group-header").on("click", function () {
      const $target = $($(this).data("target"));
      $target.slideToggle();
      $(this)
        .find(".toggle-icon")
        .text($target.is(":visible") ? ">" : "▶");
    });

    // Toggle for role level
    $(".role-header").on("click", function () {
      const $target = $($(this).data("target"));
      $target.slideToggle();
      $(this)
        .find(".toggle-icon")
        .text($target.is(":visible") ? ">" : "▶");
    });
  }

  function initConfigHandlers() {
    $("#save-btn").on("click", function () {
      for (const roles of Object.values(configGroups)) {
        for (const [type, count] of Object.entries(roles)) {
          for (let i = 1; i <= count; i++) {
            const fullType = count > 1 ? `${type}${i}` : type;
            const value = $(`#input-${fullType}`).val().trim();
            if (value) {
              localStorage.setItem(`author-name-${fullType}`, value);
            }
          }
        }
      }
      updateAuthorNames();
      location.reload();
    });

    $("#reset-btn").on("click", function () {
      for (const roles of Object.values(configGroups)) {
        for (const [type, count] of Object.entries(roles)) {
          for (let i = 1; i <= count; i++) {
            const fullType = count > 1 ? `${type}${i}` : type;
            localStorage.removeItem(`author-name-${fullType}`);
          }
        }
      }
      updateAuthorNames();
      $(".group-content input").val("");
      $(".author-name").text("nama pengguna");
      location.reload();
    });
  }

  function updateAuthorNames() {
    $(".author-name").each(function () {
      const type = $(this).attr("author-type");
      const stored = localStorage.getItem(`author-name-${type}`);
      $(this).text(stored || "nama pengguna");
    });
  }

  // Import JSON template to local storage so you can have your own configuration and you don't need to insert value manualy
  // function importFromJSON(json) {
  //   const flatFromJSON = flattenJSON(json); // Flatten nested keys

  //   for (const [key, value] of Object.entries(flatFromJSON)) {
  //     localStorage.setItem(key, value); // Overwrite or add
  //   }

  //   alert("Import complete!");
  //   location.reload(); // Reload the page to reflect changes
  // }

  // function flattenJSON(obj, result = {}) {
  //   for (const key in obj) {
  //     const value = obj[key];
  //     if (typeof value === "object" && !Array.isArray(value)) {
  //       flattenJSON(value, result); // Recursive flatten
  //     } else {
  //       result[key] = value; // Add flattened key
  //     }
  //   }
  //   return result;
  // }

  // // UI logic to trigger import
  // $("#import-button").on("click", function () {
  //   const input = $("#import-json").val();
  //   try {
  //     const parsed = JSON.parse(input);
  //     importFromJSON(parsed);
  //   } catch (err) {
  //     alert("Invalid JSON format!");
  //   }
  // });
});
