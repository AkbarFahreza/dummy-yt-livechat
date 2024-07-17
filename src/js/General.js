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

  // To apply necessary attribute inside yt-live-chat-text-message-renderer
  function chatAttributes(element) {
    element.attr("class", "style-scope yt-live-chat-item-list-renderer");
    element.attr("whole-message-clickable", "");
    element.attr("id", "123");
  }

  // Render Viewer Chats
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
  }
  $("#render-viewer-chat").on("click", renderViewerChats);

  // Render Moderator Chats
  function renderModeratorChats() {
    const randomItem = OwnerChat[Math.floor(Math.random() * OwnerChat.length)];
    const newItem = $(
      "<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>"
    );

    chatAttributes(newItem);
    newItem.attr("has-inline-action-buttons", "3");
    newItem.attr("author-is-owner", "");
    newItem.attr("author-type", "owner");
    newItem.html(randomItem);
    $("#items").append(newItem);
  }
  $("#render-moderator-chat").on("click", renderModeratorChats);

  // Render Member Chats
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
  }
  $("#render-member-chat").on("click", renderMemberChats);

  // Render Owner Chats
  function renderOwnerChats() {
    const randomItem = OwnerChat[Math.floor(Math.random() * OwnerChat.length)];
    const newItem = $(
      "<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>"
    );

    chatAttributes(newItem);
    newItem.attr("author-type", "member");
    newItem.html(randomItem);
    $("#items").append(newItem);
  }
  $("#render-owner-chat").on("click", renderOwnerChats);
});
