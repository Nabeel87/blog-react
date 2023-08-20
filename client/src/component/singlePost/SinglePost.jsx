
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPosts] = useState({});
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("/posts/" + path);
      setPosts(res.data);
    };
    getpost();
  }, [path]);

  const handleDelete = async()=>{
    try {
      await axios.delete(`/posts/${post._id}`,{
        data:{username : user.username},
      });
      window.location.replace("/");
    } catch (err) {
      
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={PF + post.photo}
            alt=""
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">
                {post.username}
              </b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}