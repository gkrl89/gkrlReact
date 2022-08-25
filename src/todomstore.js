export function CreateNotesStore(){

    return {

        notes:[],
        addNotes(text){
             this.notes.push({
                text, id})             
            
            },
            removeNote(id){
                this.notes = this.notes.filter(note => note.id != id)

            }
        }
    }



    
