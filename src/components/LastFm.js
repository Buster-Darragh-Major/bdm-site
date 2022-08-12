import "./LastFm.scss";
import React, { useState } from "react";

function LastFm(props) {
    let defaultObject = {
        topAlbums: [],
        userInfo: {},
        recentTracks: []
    };
    const [state, setState] = useState(defaultObject);

    if (state.topAlbums.length === 0) {
        GetAlbums().then(albums => {
            setState(state => ({ ...state, topAlbums: albums.topalbums.album }));
        });
    }
    if (state.recentTracks.length === 0) {
        GetRecentTracks().then(tracks => {
            setState(state => ({ ...state, recentTracks: tracks.recenttracks.track }));
        });
    }

    return (
        <div className="lastfm-container">
            <div className="lastfm-title">What I've been listening to</div>
            <div className="grid-tiles-container">
                { RenderAlbums(state.topAlbums) }
            </div>
            <div className="lastfm-currently-listening">
                { RenderRecentTracks(state.recentTracks) }
            </div>
        </div>
    );
}

// private functions

function RenderAlbums(topAlbums) {
    let albums = [];
    topAlbums.forEach((topAlbum, i) => {
        albums.push(
            <div className="grid-tile" key={i}>
                <a href={topAlbum.url} rel="noopener noreferrer" target="_blank">
                    <div className="grid-tile-overlay">
                        <div>
                            <div>{`${topAlbum.artist.name}:`}</div>
                            <div>{topAlbum.name}</div>
                            <br/>
                            <div>{`${topAlbum.playcount} plays`}</div>
                        </div>
                    </div>
                    <img src={topAlbum.image.find(img => img.size === "large")["#text"]} alt={`${topAlbum.artist.name} - ${topAlbum.name}`}></img>
                </a>
            </div>
        )
    });

    return albums;
}

function RenderRecentTracks(recentTracks) {
    let tracks = [];

    recentTracks.forEach((track, i) => {
        //debugger;
        tracks.push(<div key={i}>
            <div>{track.name}</div>
            <div>{track.artist["#text"]}</div>
            <div>{track.album["#text"]}</div>
            <div>{TimestampToHumanReadable(track.date.uts)}</div>
            <img src={track.image.find(img => img.size === "medium")["#text"]} alt={`${track.artist.name} - ${track.name}`}></img>
        </div>);
    });

    return tracks;
}

function TimestampToHumanReadable(timeStamp) {
    const nowSecs = Math.floor(Date.now() / 1000);
    const diffSecs = nowSecs - timeStamp;

    let representations = [
        { label: "year", value: Math.floor(diffSecs / 31536000) },
        { label: "month", value: Math.floor(diffSecs / 2628288) },
        { label: "week", value: Math.floor(diffSecs / 604800) },
        { label: "day", value: Math.floor(diffSecs / 86400) },
        { label: "hour", value: Math.floor(diffSecs / 3600) },
        { label: "minute", value: Math.floor(diffSecs / 60) },
        { label: "second", value: diffSecs }
    ];

    let renderedRep = representations.find(rep => rep.value > 0);
    return `${renderedRep.value} ${renderedRep.label}${renderedRep.value > 1 ? "s" : ""} ago`;
}

function GetAlbums() {
    return fetchJson("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=repoman63&api_key=d22b78878dae20222165cbca4b0ef8d2&format=json&period=1month&limit=24");
}

function GetRecentTracks() {
    return fetchJson("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=repoman63&api_key=d22b78878dae20222165cbca4b0ef8d2&format=json&limit=3");
}

function fetchJson(url) {
    return fetch(url).then(response => {
        return response.json();
    });
}

export default LastFm;