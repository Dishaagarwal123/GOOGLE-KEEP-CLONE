class notes_class{
    constructor(title,note){
       this.title=title
        this.note=note
    }
}
class display{
    constructor(notes){
        this.notes=notes
    }
    addnote(){
        const ul=document.getElementById('ul')
        const data=document.createElement('li')
        data.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.notes.title}</h5>
          <p class="card-text">${this.notes.note}</p>
          <a href="#" class="btn btn-primary">delete</a>
        </div>
      </div>`
      ul.append(data)
      console.log(data);
    }
}
const form=document.getElementById('form'); 

form.addEventListener('submit',notesubmit);


function notesubmit(e){
    e.preventDefault();
    console.log('added');
    const title=document.getElementById('title').value;
    const note=document.getElementById('note').value;
    const notes=new notes_class(title,note);
    console.log(notes);
    const displaynote=new display(notes);
    // console.log(displaynote.addnote);
    displaynote.addnote(notes);
}
