import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Return to home page</Link>
    </>
  )
}

export default NotFoundPage