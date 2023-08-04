import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to Products <Link to="/products">the list of products</Link>
      </p>
      <button onClick={onNavigateHandler}>Navigate</button>
    </>
  );
};

export default Home;
