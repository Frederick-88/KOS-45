import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Article.css";

class Article extends Component {
  constructor(props) {
    super(props);
    // = this.state.data = data:[]
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "http://localhost:8000/article/getarticle"
      );
      this.setState({ data: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const picture = (image) => {
      return {
        backgroundImage: `url(http://localhost:8000/${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "15rem",
      };
    };
    return (
      <div className="bg-light pt-4 pb-5" style={{ marginTop: "5rem" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-center">
            <li class="breadcrumb-item">
              <a href="/" className="text-danger">
                Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Article
            </li>
          </ol>
        </nav>
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="mb-4 mt-4">
            Articles tentang <span className="text-danger">Bullying</span>
          </h4>

          {this.state.data.length !== 0
            ? this.state.data.data.map((item, index) => {
                return (
                  <div class="card mb-4" key={index}>
                    <div class="row no-gutters">
                      <div class="col-md-4">
                        <div style={picture(item.image)} />
                      </div>
                      <div class="col-md-8 align-self-center">
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text my-0">{item.paragraph1}</p>
                          <Link
                            to={`article/page/${item._id}`}
                            className="btn btn-outline-danger my-2"
                            style={{ fontSize: "0.85rem" }}
                          >
                            Read more ...
                          </Link>
                          <p class="card-text">
                            <small class="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}
export default Article;
