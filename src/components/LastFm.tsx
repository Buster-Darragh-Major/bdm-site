import "./LastFm.scss";
import {type FunctionComponent, type ReactElement, type ReactNode, useState} from "react";

const LastFm: FunctionComponent = () => {
    const defaultObject = {
        topAlbums: [],
        userInfo: {},
        recentTracks: []
    };
    const [state, setState] = useState(defaultObject);

    if (state.topAlbums.length === 0) {
        void GetAlbums().then(albums => {
            setState(state => ({...state, topAlbums: albums.topalbums.album}));
        });
    }
    if (state.recentTracks.length === 0) {
        void GetRecentTracks().then(tracks => {
            setState(state => ({...state, recentTracks: tracks.recenttracks.track}));
        });
    }
    if (Object.keys(state.userInfo).length === 0) {
        void GetUserInfo().then(userInfo => {
            setState(state => ({...state, userInfo}));
        });
    }

    return (
        <div className="lastfm-container">
            <div className="lastfm-title">My last month in music</div>
            <div className="grid-tiles-container">
                {RenderAlbums(state.topAlbums)}
            </div>
            <div className="lastfm-currently-listening">
                {RenderRecentTracks(state.recentTracks)}
            </div>
            <div className="lastfm-user-info">
                {RenderUserInfo(state.userInfo)}
            </div>
        </div>
    );
}

// private functions
// TODO: remove objects from typing
const RenderAlbums: (topAlbums: object[]) => ReactElement[] = (topAlbums) => {
    const albums: ReactElement[] = [];
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
                    <img src={topAlbum.image.find(img => img.size === "large")["#text"]}
                         alt={`${topAlbum.artist.name} - ${topAlbum.name}`}></img>
                </a>
            </div>
        )
    });

    return albums;
}

const RenderRecentTracks: (topAlbums: object[]) => ReactElement[] = (recentTracks) => {
    const tracks: ReactElement[] = [];

    recentTracks.forEach((track, i) => {
        const nowPlaying = track["@attr"]?.nowplaying;
        tracks.push(
            <a key={i} className="lastfm-song link-remove-underline" href={track.url} rel="noopener noreferrer"
               target="_blank">
                <div className="lastfm-img-container">
                    <img src={track.image.find(img => img.size === "medium")["#text"]}
                         alt={`${track.artist.name} - ${track.name}`}></img>
                </div>
                <div className="lastfm-song-info">
                    <div className="lastfm-song-name">{track.name}</div>
                    <div className="lastfm-artist-name">{track.artist["#text"]}</div>
                    <div className="lastfm-album-name">{track.album["#text"]}</div>
                    <div
                        className="lastfm-time-played">{nowPlaying ? "Now Playing!" : TimestampToHumanReadable(track.date?.uts)}</div>
                </div>
            </a>);
    });

    return tracks;
}

const RenderUserInfo: (topAlbums: object[]) => ReactElement = (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
        return <div></div>;
    }

    const date = new Date(userInfo.user.registered.unixtime * 1000);
    return <div>
        <div>{`${userInfo.user.playcount} songs played since ${date.getFullYear()}`}</div>
    </div>;
}

const TimestampToHumanReadable: (timeStamp: number) => string = (timeStamp) => {
    const nowSecs = Math.floor(Date.now() / 1000);
    const diffSecs = nowSecs - timeStamp;

    const representations = [
        {label: "year", value: Math.floor(diffSecs / 31536000)},
        {label: "month", value: Math.floor(diffSecs / 2628288)},
        {label: "week", value: Math.floor(diffSecs / 604800)},
        {label: "day", value: Math.floor(diffSecs / 86400)},
        {label: "hour", value: Math.floor(diffSecs / 3600)},
        {label: "minute", value: Math.floor(diffSecs / 60)},
        {label: "second", value: diffSecs}
    ];

    const renderedRep = representations.find(rep => rep.value > 0) ?? {label: "second", value: 0};
    return `${renderedRep.value} ${renderedRep.label}${renderedRep.value > 1 ? "s" : ""} ago`;
}

const GetAlbums: () => Promise<string> = async () => {
    return await fetchJson("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=repoman63&api_key=d22b78878dae20222165cbca4b0ef8d2&format=json&period=1month&limit=12");
}

const GetRecentTracks: () => Promise<string> = async () => {
    return await fetchJson("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=repoman63&api_key=d22b78878dae20222165cbca4b0ef8d2&format=json&limit=3");
}

const GetUserInfo: () => Promise<string> = async () => {
    return await fetchJson("http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=repoman63&api_key=d22b78878dae20222165cbca4b0ef8d2&format=json");
}

const fetchJson: (url: string) => Promise<string> = async (url) => {
    return await fetch(url).then(async response => {
        return await response.json();
    });
}

export {LastFm};