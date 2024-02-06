import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const TesJson = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:3030/products", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex justify-content-center p-3">
      {posts.map((post) => (
        <Card className="m-3" key={post.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ID: {post.id}
            </Card.Subtitle>
            <Card.Text>{post.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TesJson;
