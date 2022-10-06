import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

function RemoveModal() {
    const { store } = useContext(GlobalStoreContext);
    let title = "";
    if (store.songMarkedForRemoval != undefined){
        title = store.currentList.songs[store.songMarkedForRemoval].title;
    }
    function handleRemoveList(event) {
        store.hideRemoveSongModal();
        store.removeMarkedSong();
    }
    function handleCloseModal(event) {
        store.hideRemoveSongModal();
    }
    return (
        <div
            className="modal"
            id="remove-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <div className='modal-header'>Remove song?</div>
                <div className='dialog-header'>
                    Are you sure you wish to permanently remove the <b><em>{title}</em></b>?
                </div>
                <div id="confirm-cancel-container" className='modal-footer'>
                    <button
                        id="dialog-yes-button"
                        className="modal-control"
                        onClick={handleRemoveList}
                    >Confirm</button>
                    <button
                        id="dialog-no-button"
                        className="close-modal-button modal-control"
                        onClick={handleCloseModal}
                    >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default RemoveModal;