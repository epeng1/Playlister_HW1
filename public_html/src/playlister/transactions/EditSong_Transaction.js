import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that edits a song
 * from a playlist. It will be managed by the transaction stack.
 * 
 * @author ep1
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, index, oldTitle, newTitle, oldArtist, newArtist, oldLink, newLink) {
        super();
        this.model = initModel;
        this.index = index;
        this.oldTitle = oldTitle;
        this.newTitle = newTitle;
        this.oldArtist = oldArtist;
        this.newArtist = newArtist;
        this.oldLink = oldLink;
        this.newLink = newLink;
    }

    doTransaction() {
        this.model.editSong(this.index, this.newTitle, this.newArtist, this.newLink);
    }
    
    undoTransaction() {
        this.model.editSong(this.index, this.oldTitle, this.oldArtist, this.oldLink);
    }
}