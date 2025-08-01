export default function SideNav(props){
const notes =["hello","world"]
return(
<section className={"nav"}>
  <h1 className="text-gradient">AINOTES</h1>
  <div className="full-line"></div>
  <button>
    <h6>New notes</h6>
    <i className="fa-solid fa-plus"></i>
  </button>
  <div className="notes-list">
  {notes.map((note,idx) => {
    return(
        <button key={idx} className="card-button-secondary">
           <p>{note}</p> 
           <small>DATETIME</small>
           DELETE BUTTON ICON
        </button>
    )
  })}
</div>
</section>


)
}