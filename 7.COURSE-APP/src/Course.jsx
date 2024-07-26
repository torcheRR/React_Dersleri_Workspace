import React from "react";

function Course({ course }) {
  console.log(course);

  const { id, title, description, price, link, image } = course;

  return (
    <div className="course">
      <div>
        <img className='course-image'src={image} height={125} width={250} />
        <h4 className="course-title">{title}</h4>
        <h5 className="course-desc">{description}</h5>
        <h3 className="course-price">{price}₺</h3>
        <div className="course-link">
          <a className="course-link" href={link}>
            Kursa Git
          </a>
        </div>
      </div>
    </div>
  );
}

export default Course;
