import React from "react";

function Accordion({ items }) {
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;
