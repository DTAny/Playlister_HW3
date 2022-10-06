import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initStore, index, newSong, oldSong) {
        super();
        this.store = initStore;
        this.index = index;
        this.newSong = newSong;
        this.oldSong = oldSong;
    }

    doTransaction() {
        this.store.editSong(this.index, this.newSong);
    }
    
    undoTransaction() {
        this.store.editSong(this.index, this.oldSong);
    }
};
