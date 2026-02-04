import { useParams } from "react-router"

function NoteDetailPage() {
  const {id} = useParams<{id:string}>();
  
  return (
    <div>NoteDetailPage {id}</div>
  )
}

export default NoteDetailPage