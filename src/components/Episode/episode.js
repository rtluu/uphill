import React from "react";
import "./episode.scss";

import AnchorIcon from "../../icons/anchor-icon.inline.svg";
import AppleIcon from "../../icons/apple-icon.inline.svg";
import SpotifyIcon from "../../icons/spotify-icon.inline.svg";
import BreakerIcon from "../../icons/breaker-icon.inline.svg";

const Episode = (props) => {

    return (
        <div className="episode-card">
            <div className="iframe-holder">
                <iframe frameBorder="0" height="180" width="100%" src={"https://player.podcard.fm?" + props.link}></iframe>
            </div>
            <div className="description">
                <p className="description-text">{props.description}</p>
                <div className="link-box">
                    <h5 className="subscribe-cta">Subscribe</h5>
                    <ul className="link-list">
                        {/* <a href={"/"} ><li className="link-item"><AppleIcon /></li></a> */}
                        <a href={"https://open.spotify.com/episode/" + props.spotify} ><li className="link-item"><SpotifyIcon /></li></a>
                        <a href={"https://anchor.fm/uphillfm/episodes/" + props.anchor} ><li className="link-item"><AnchorIcon /></li></a>
                        <a href={"https://www.breaker.audio/uphill-2/e/" + props.breaker} ><li className="link-item"><BreakerIcon /></li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Episode