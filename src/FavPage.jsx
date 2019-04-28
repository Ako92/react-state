import React from "react";
import { Store } from "./store";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function FavPage() {
  const { state, dispatch } = React.useContext(Store);
  const toggleFavAction = episode => {
    const episodeInFavorites = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFavorites) {
      const favoritesWithoutEpisode = state.favorites.filter(
        fav => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favoritesWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };

  const props = {
    episodes: state.favorites,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}
