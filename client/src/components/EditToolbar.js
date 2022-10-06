import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();

    let enabledButtonClass = "playlister-button";
    let disableButtonClass = "playlister-button-disabled"

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    let addStatus = false, undoStatus = !store.hasUndo, redoStatus = !store.hasRedo, closeStatus = false;
    if (store.currentList === null || store.buttonDisabled) {
        addStatus = true;
        undoStatus = true;
        redoStatus = true;
        closeStatus = true;
    }
    return (
        <div id="edit-toolbar">
            <input
                type="button"
                id='add-song-button'
                disabled={addStatus}
                value="+"
                className={addStatus ? disableButtonClass : enabledButtonClass}
                onClick={store.addSongTrasaction}
            />
            <input
                type="button"
                id='undo-button'
                disabled={undoStatus}
                value="⟲"
                className={undoStatus ? disableButtonClass : enabledButtonClass}
                onClick={handleUndo}
            />
            <input
                type="button"
                id='redo-button'
                disabled={redoStatus}
                value="⟳"
                className={redoStatus ? disableButtonClass : enabledButtonClass}
                onClick={handleRedo}
            />
            <input
                type="button"
                id='close-button'
                disabled={closeStatus}
                value="&#x2715;"
                className={closeStatus ? disableButtonClass : enabledButtonClass}
                onClick={handleClose}
            />
        </div>);
}

export default EditToolbar;