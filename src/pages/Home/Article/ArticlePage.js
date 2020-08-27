import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    // = this.state.data = data:[]
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const idArticle = this.props.match.params.id;

    try {
      const response = await axios.get(
        `https://kos45-backend.herokuapp.com/article/getarticle/${idArticle}`
      );
      this.setState({ data: response.data });
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
        height: "20rem",
      };
    };
    let { data } = this.state.data;

    return (
      <div className="bg-light pt-4 pb-5" style={{ marginTop: "5rem" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-center">
            <li class="breadcrumb-item">
              <a href="/" className="text-danger">
                Homaae
              </a>
            </li>
            <li class="breadcrumb-item">
              <a href="/#/article" className="text-danger">
                Article
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Page
            </li>
          </ol>
        </nav>
        {this.state.data.status === "success" ? (
          <div className="article-page-container">
            <h4 className="mb-4 text-center">
              <span className="text-danger mr-2">{data.title}</span>
              Article
            </h4>

            <div>
              <div className="d-flex justify-content-center">
                <div className="article-page-img" style={picture(data.image)} />
              </div>
              <div className="mt-4">
                <p>{data.paragraph1}</p>
                <p>{data.paragraph2}</p>
                <p>{data.paragraph3}</p>
                <p>{data.paragraph4}</p>
                <p>{data.paragraph5}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default withRouter(ArticlePage);
