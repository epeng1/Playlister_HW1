import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * RemoveSong_Transaction
 * 
 * This class represents a transaction that removes a song
 * from a playlist. It will be managed by the transaction stack.
 * 
 * @author ep1
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, index, title, artist, link) {
        super();
        this.model = initModel;
        this.oldIndex = index;
        this.oldTitle = title;
        this.oldArtist = artist;
        this.oldLink = link;
    }

    doTransaction() {
        this.model.removeSong(this.oldIndex);
    }
    
    undoTransaction() {
        this.model.addSong(this.oldIndex, this.oldTitle, this.oldArtist, this.oldLink)
    }
}