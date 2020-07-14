import React, { Component } from "react";

class ArticlePage extends Component {
  render() {
    return (
      <div className="bg-light pt-4 pb-5" style={{ marginTop: "5rem" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-center">
            <li class="breadcrumb-item">
              <a href="/" className="text-danger">
                Home
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
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="mb-4 text-center">
            <span className="text-danger">
              Bullying, Penyebab, dan Cara Menghadapinya
            </span>{" "}
            Article
          </h4>

          <div>
            <div className="d-flex justify-content-center">
              <img
                src="https://images.squarespace-cdn.com/content/5475f6eae4b0821160f6ac3e/1569939969068-1MVN6OM2Y8U41T08EYE4/bigstock-Victim-Women-Depressed-Girl-I-260965918.jpg?content-type=image%2Fjpeg"
                className="w-50"
                alt="..."
              />
            </div>
            <div className="mt-4">
              <p>
                Bullying, sepertinya kita sudah tidak asing dengan kata ini.
                Kasus bullying atau penindasan ini seperti tidak ada habisnya,
                masih ingat kasus bully terhadap seorang bocah penjual jalankote
                di SulSel kemarin ? itu baru secuil dari ratusan bahkan mungkin
                ribuan kasus bullying yang terjadi.
              </p>
              <p>
                Bullying itu apa sih? Bullying adalah perilaku tidak
                menyenangkan baik secara verbal, fisik, ataupun sosial di dunia
                nyata maupun dunia maya.
              </p>
              <p>Penyebab bullying bisa menjadi :</p>
              <p>
                1. Penampilan fisikPenyebab bullying pertama dan yang paling
                umum adalah akibat dari penampilan fisik. 2. RasPerbedaan ras
                juga sering kali menyebabkan seorang terkena bully 3. Orientasi
                seksualOrientasi seksual seseorang berbeda-beda dan umumnya
                seorang baru menyadari orientasi seksual yang berbeda saat
                memasuki usia remaja.
              </p>
              <p>
                Bullying merupakan masalah serius yang perlu diatasi karena
                dapat memberikan dampak jangka panjang baik untuk korban dan
                juga pelaku. Mari bersama-sama hentikan perlakuan ini di sekitar
                kita.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ArticlePage;
