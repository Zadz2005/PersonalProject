import Editor from "@/components/Editor"
import SideNav from "@/components/SideNav"
import MDX from "@/components/MDX"


export default function NotesPage(){
    const isViewer = false



return (
<main id="notes">
  <SideNav/>
{!isViewer && (<Editor hello="world" isViewer={isViewer} />)}
{isViewer && (<MDX />)}
    
</main>
)
    

}