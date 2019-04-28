import React from "react";
import { Store } from "./store";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function HomePage() {
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

  const fetchDataAction = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites
  };

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
