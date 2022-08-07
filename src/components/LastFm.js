import "./LastFm.scss";
import React, { useState } from "react";

function LastFm(props) {
    let defaultObject = {
        topAlbums: [],
        userInfo: {},
        recentSongs: []
    };
    const [state, setState] = useState(defaultObject);

    if (state.topAlbums.length === 0) {
        GetAlbums().then(albums => {
            setState(state => ({ ...state, topAlbums: albums.topalbums.album}));
        });
    }

    let albums = [];
    state.topAlbums.forEach((topAlbum, i) => {
        albums.push(
            <div className="grid-tile" key={i}>
                <div className="grid-tile-overlay">
                    <div>{topAlbum.artist.name}</div>
                    <div>{topAlbum.name}</div>
                </div>
                <img src={topAlbum.image.find(img => img.size === "large")["#text"]} alt={`${topAlbum.artist.name} - ${topAlbum.name}`}></img>
            </div>
        )
    });

    return (
        <div className="grid-tiles-container">
            { albums }
        </div>
    );
}

// private functions

function GetAlbums() {
    return fetchJson("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=repoman63&api_key=d22b78878dae20222165cbca4b0ef8d2&format=json&period=1month&limit=24");
}

function fetchJson(url) {
    return fetch(url).then(response => {
        return response.json();
    });
}

export default LastFm;