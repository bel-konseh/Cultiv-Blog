import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About <span className="highlight">Cultiv Reads</span></h1>
      <p className="tagline">Celebrating Cameroonian voices — one story at a time.</p>

      <section className="about-section">
        <p>
          <strong>Cultiv Reads</strong> is a homegrown platform built for
          Cameroonians to share their <strong>stories, thoughts, and creativity</strong>
          with the world. From thought-provoking articles to personal reflections,
          poetry, and news that matter to us — Cultiv Reads is where our narratives
          come alive.
        </p>

        <p>
          Our goal is to nurture a digital space that reflects the richness of
          Cameroon — its languages, cultures, humor, struggles, and victories.
          Whether you’re in Buea, Yaoundé, Bamenda, Douala, or abroad, this is
          your corner of the internet to write, learn, and connect.
        </p>

        <p>
          <em>“Cultiv”</em> stands for <strong>cultivation</strong> — of ideas, creativity,
          and community. We believe stories can cultivate understanding, spark
          conversation, and inspire change.
        </p>

        <p>
          Join us in amplifying Cameroonian voices. Read, write, and share —
          because every story planted here grows into something powerful.
        </p>
      </section>

      <section className="about-footer">
        <p>
          ✍️ Want to contribute? <br />
          <a href="/signup" className="about-link">Create an account</a> and start writing today!
        </p>
        <p><a href="/">Back Home</a></p>
      </section>
    </div>
  );
}

export default About;
