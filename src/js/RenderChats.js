$(document).ready(function () {
  renderButtons();

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
    newItem.attr("has-inline-action-buttons", "3");
    newItem.attr("author-is-owner", "");
    newItem.attr("author-type", "owner");
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
    newItem.attr("author-type", "member");
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
  // Tier1
  function renderSuperchatTier1() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$1,00"
    ).TierData;
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
  }
  $("#render-tier1-superchat").on("click", renderSuperchatTier1);

  // Tier2
  function renderSuperchatTier2() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "Rp20,000"
    ).TierData;
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
  }
  $("#render-tier2-superchat").on("click", renderSuperchatTier2);
  // Tier3
  function renderSuperchatTier3() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$10"
    ).TierData;
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
  }
  $("#render-tier3-superchat").on("click", renderSuperchatTier3);
  // Tier4
  function renderSuperchatTier4() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "Rp100,000"
    ).TierData;
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
  }
  $("#render-tier4-superchat").on("click", renderSuperchatTier4);
  // Tier5
  function renderSuperchatTier5() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$20"
    ).TierData;
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
  }
  $("#render-tier5-superchat").on("click", renderSuperchatTier5);
  // Tier6
  function renderSuperchatTier6() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$50"
    ).TierData;
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
  }
  $("#render-tier6-superchat").on("click", renderSuperchatTier6);
  // Tier7
  function renderSuperchatTier7() {
    const SuppaData = SuperchatEventData(
      ProfilePicture,
      MemberBadge,
      "$100"
    ).TierData;
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
  }
  $("#render-tier7-superchat").on("click", renderSuperchatTier7);
});
