import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
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
      Aos.init({ duration: 1500, disable: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const picture = (image) => {
      return {
        backgroundImage: `url(${image})`,
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
        <div className="article-page-container">
          <h4 className="mb-4 mt-4">
            Articles tentang <span className="text-danger">Bullying</span>
          </h4>

          {this.state.data.length !== 0
            ? this.state.data.data.map((item, index) => {
                return (
                  <div
                    data-aos="fade-right"
                    // menghentikan efek kalau scroll keatas hilang efek animasinya
                    data-aos-anchor-placement="top"
                    class="card mb-4"
                    key={index}
                  >
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
