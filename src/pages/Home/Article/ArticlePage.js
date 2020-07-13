import React, { Component } from "react";

class ArticlePage extends Component {
  render() {
    return (
      <div className="bg-light pt-5 pb-5" style={{ marginTop: "5rem" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-center">
            <li class="breadcrumb-item">
              <a href="/" className="text-danger">
                Home
              </a>
            </li>
            <li class="breadcrumb-item">
              <a href="/article" className="text-danger">
                Article
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Page
            </li>
          </ol>
        </nav>
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="mb-4">
            <span className="text-danger">Title</span> Article
          </h4>

          <div>
            <h1>Ini artikel</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default ArticlePage;
