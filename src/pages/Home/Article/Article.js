import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Article.css";

class Article extends Component {
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
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="mb-4">
            Articles tentang <span className="text-danger">Bullying</span>
          </h4>

          <div class="card mb-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <div
                  style={picture(
                    "https://www.childrens.com/wps/wcm/connect/childrenspublic/f64ee2bc-f887-4366-b8e9-c67b486a1041/shutterstock_573798472_800x480.jpg?MOD=AJPERES&CVID="
                  )}
                />
              </div>
              <div class="col-md-8 align-self-center">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text my-0">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Link
                    to={`article/page`}
                    className="btn btn-outline-danger my-2"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Read more ...
                  </Link>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <div
                  style={picture(
                    "https://images.squarespace-cdn.com/content/5475f6eae4b0821160f6ac3e/1569939969068-1MVN6OM2Y8U41T08EYE4/bigstock-Victim-Women-Depressed-Girl-I-260965918.jpg?content-type=image%2Fjpeg"
                  )}
                />
              </div>
              <div class="col-md-8 align-self-center">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text my-0">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Link
                    to={`article/page`}
                    className="btn btn-outline-danger my-2"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Read more ...
                  </Link>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
