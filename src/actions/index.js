// Action creator
// named export insted of default export
export const selectSong = (song) => {
  // Returns an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
