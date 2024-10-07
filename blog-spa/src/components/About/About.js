import React from "react";
import "./About.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <Nav />
      <div className="about">
        <div className="container">
          <h2 className="about__title">Hello I'm Farzane</h2>
          <div className="about__info">
            <div className="about__image">
              <img src="./images/photo.jpg" alt="farzane" />
            </div>
            <p className="about__caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur beatae quod cum accusantium exercitationem officia
              voluptatibus, eius nemo asperiores in adipisci illum iste quaerat
              voluptates laborum incidunt natus vero ipsa? Non, libero ab
              aspernatur voluptatum facilis sed maxime delectus recusandae?
              Alias voluptas repellat voluptatem quia, sint asperiores inventore
              molestiae vitae ut incidunt voluptatibus velit. Doloremque libero
              reprehenderit voluptatibus explicabo consequuntur. Sapiente
              libero, architecto recusandae rerum corrupti, molestiae reiciendis
              perferendis tempore dolores dolor blanditiis iure illum?
              Blanditiis ducimus consequatur quo. Corporis asperiores aut nihil
              in. Commodi reprehenderit, repudiandae quam ut corporis dolorem
              autem numquam enim officiis, consequuntur repellat neque
              consectetur maxime harum similique facere libero debitis labore
              qui quibusdam! Natus mollitia quam neque dolores consequatur,
              placeat fuga quas repudiandae. Ratione et ut dolores dicta quod
              dolor autem! Consectetur ex unde reiciendis nostrum dolorum vero,
              expedita laudantium ab quae ullam, dolore ducimus maxime
              distinctio dolor ratione similique a est quam, molestias amet
              eveniet in consequuntur? Quam architecto repudiandae deleniti,
              voluptate quasi amet? Adipisci, commodi animi. Exercitationem,
              tempore ea natus aspernatur excepturi reprehenderit molestias quis
              beatae sit voluptas doloremque perferendis, inventore minima
              assumenda repudiandae? Provident odit tempore nulla ratione sunt,
              quisquam doloremque assumenda quaerat porro praesentium fugiat
              accusamus a ullam nesciunt ipsa tenetur.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
