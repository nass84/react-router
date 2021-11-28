import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
  // const params = useParams()
  const { id } = useParams()    
  const url = 'http://localhost:3000/articles/' + id
  const { data: article, isPending, error } = useFetch(url)
const history = useHistory()

  useEffect(() => {
      if (error) {
          //   history.goBack() - takes back to last page
          setTimeout(() => {
                //redirect to Home Page after 2 seconds
            history.push("/")
          }, 2000)
        }
    }, [error, history])
      
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}