import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

function DeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.hideDeleteListModal();
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.hideDeleteListModal();
    }
    return (
        <div
            className="modal"
            id="delete-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <div className='modal-header'>Delete playlist?</div>
                <div className='dialog-header'>
                    Are you sure you wish to permanently delete the <b><em>{name}</em></b> playlist?
                </div>
                <div id="confirm-cancel-container" className='modal-footer'>
                    <button
                        id="dialog-yes-button"
                        className="modal-control"
                        onClick={handleDeleteList}
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

export default DeleteModal;