import React from "react";

const Card = ({ menuItem }) => {
  return (
    <div className="grid">
      {menuItem.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div class="inner-card">
              <div className="image-container">
                <img src={item.image} alt="" className="image" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div>
              <ul>
                <li>
                  <a href={item.live}>Live</a>
                </li>
                <li>
                  <a href={item.repo}>Repo</a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
