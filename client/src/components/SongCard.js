import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

function SongCard(props) {
    const { store } = useContext(GlobalStoreContext);
    const [draggedTo, setDraggedTo] = useState(false);
    const { song, index } = props;

    function handleDragStart(event) {
        event.dataTransfer.setData("id", event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDragEnter(event) {
        event.preventDefault();
        setDraggedTo(true);
    }

    function handleDragLeave(event) {
        event.preventDefault();
        setDraggedTo(false);
    }

    function handleDrop(event) {
        event.preventDefault();
        let targetId = event.target.id;
        targetId = targetId.substring(targetId.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("id");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        setDraggedTo(false);
        store.addMoveItemTransaction(parseInt(sourceId), parseInt(targetId));
    }

    function handleRemoveSong(event) {
        event.preventDefault();
        store.showRemoveSongModal(index);
    }

    function handleDoubleClick(event) {
        event.preventDefault();
        store.showEditSongModal(index);
    }

    let cardClass = "list-card unselected-list-card";
    if (draggedTo) {
        cardClass = "list-card selected-list-card";
    }
    return (
        <div
            key={index}
            id={'song-' + index}
            className={cardClass}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDoubleClick={handleDoubleClick}
            draggable="true"
        >
            {index + 1}.
            <a
                id={'song-' + index + '-link'}
                className="song-link"
                href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                {song.title} by {song.artist}
            </a>
            <input
                type="button"
                id={"remove-song-" + index}
                className="list-card-button"
                onClick={handleRemoveSong}
                value={"\u2715"}
            />
        </div>
    );
}

export default SongCard;