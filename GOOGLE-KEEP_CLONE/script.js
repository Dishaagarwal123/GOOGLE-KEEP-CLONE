class Note{
    constructor(note){
        this.note=note;
    }
}
class Displaynote{
    constructor(note){
        this.note=note;
    }
}
addnote(){
    const notes=document.getElementsByClassName('notes');
    const data=document.createElement('form');
    data.innerHTML = `<div>
    <form>
      <div class="mb-3">
        <label for="note" class="form-label">note</label>
        <input type="text" class="form-control" id="note" aria-describedby="emailHelp">
        
      </div>
      
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>`

}
const googlenote=document.getElementById('google_note');
googlenote.addEventListener('submit',googlenotesubmit);
function googlenotesubmit(e){
e.preventDefault();
console.log('submitted🎉');
const note=document.getElementById('note').value;
}
