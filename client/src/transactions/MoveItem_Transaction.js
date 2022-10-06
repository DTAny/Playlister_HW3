import jsTPS_Transaction from "../common/jsTPS.js"

export default class MoveItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, initOldIndex, initNewIndex) {
        super();
        this.store = initStore;
        this.oldItemIndex = initOldIndex;
        this.newItemIndex = initNewIndex;
    }

    doTransaction() {
        this.store.moveItem(this.oldItemIndex, this.newItemIndex);
    }
    
    undoTransaction() {
        this.store.moveItem(this.newItemIndex, this.oldItemIndex);
    }
}