// config.js

// `APP_URL` artık gerekli değil
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const TOKEN_TYPE = "TOKEN_TYPE";
export const EXPIRES_IN = "EXPIRES_IN";
export const NOW_PLAYING = "NOW_PLAYING";
export const LOADED_TRACKS = "LOADED_TRACKS";
export const ENDPOINT = {
    userInfo: "me",
    featuredPlayist: "browse/featured-playlists?limit=5",
    toplists: "browse/categories/toplists/playlists?limit=10",
    playlist: "playlists",
    userPlaylist: "me/playlists"
};
