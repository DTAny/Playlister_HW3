import jsTPS_Transaction from "../common/jsTPS.js"

export default class RmSong_Transaction extends jsTPS_Transaction {
    constructor(initStore, index, song) {
        super();
        this.store = initStore;
        this.index = index;
        this.song = song;
    }

    doTransaction() {
        this.store.removeSong(this.index);
    }
    
    undoTransaction() {
        this.store.insertSong(this.index, this.song);
    }
};
