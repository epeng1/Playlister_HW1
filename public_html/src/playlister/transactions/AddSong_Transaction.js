import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that adds a song
 * from a playlist. It will be managed by the transaction stack.
 * 
 * @author ep1
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
    }

    doTransaction() {
        this.model.addSong(this.model.getPlaylistSize(), "Untitled", "Unknown", "dQw4w9WgXcQ");
    }
    
    undoTransaction() {
        this.model.removeSong(this.model.getPlaylistSize() - 1);
    }
}