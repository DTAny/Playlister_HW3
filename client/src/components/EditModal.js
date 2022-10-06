import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

function EditModal() {
    const { store } = useContext(GlobalStoreContext);
    if (store.songMarkedForEdit !== undefined) {
        document.getElementById('modal-edit-title').value = store.currentList.songs[store.songMarkedForEdit].title;
        document.getElementById('modal-edit-artist').value = store.currentList.songs[store.songMarkedForEdit].artist;
        document.getElementById('modal-edit-youTubeId').value = store.currentList.songs[store.songMarkedForEdit].youTubeId;
    }
    function handleEditSong(event) {
        store.hideEditSongModal();
        let newSong = {
            title: document.getElementById('modal-edit-title').value,
            artist: document.getElementById('modal-edit-artist').value,
            youTubeId: document.getElementById('modal-edit-youTubeId').value,
        }
        store.editMarkedSong(newSong);
    }
    function handleCloseModal(event) {
        store.hideEditSongModal();
    }
    return (
        <div
            className="modal"
            id="edit-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <div className='modal-header'>Edit Song</div>
                <div className='modal-input'>
                    <div className='modal-edit-prompt'>Title: </div>
                    <input id='modal-edit-title'></input>
                    <div className='modal-edit-prompt'>Artist: </div>
                    <input id='modal-edit-artist'></input>
                    <div className='modal-edit-prompt'>YouTube Id: </div>
                    <input id='modal-edit-youTubeId'></input>
                </div>
                <div id="confirm-cancel-container" className='modal-footer'>
                    <button
                        id="dialog-yes-button"
                        className="modal-control"
                        onClick={handleEditSong}
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

export default EditModal;