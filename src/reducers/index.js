import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: "Backstreet boys",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "3:05",
    },
    {
      title: "Backstreet girls",
      duration: "2:33",
    },
    {
      title: "I want it that way",
      duration: "1:45",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
