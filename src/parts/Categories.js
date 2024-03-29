import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Categories({ data }) {
  return data.map((category, idx1) => {
    return (
      <section className="container" key={`category-${idx1}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium"> {category.name} </h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, idx2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${idx1}-item-${idx2}`}
                  >
                    <Fade bottom delay={300 * idx2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular
                            <span className="font-weight-light"> Choice </span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover "
                          />
                        </figure>
                        <div className="meta-wrapper mt-3">
                          <Button
                            href={`/properties/${item._id}`}
                            type="Link"
                            className="stretched-link d-block text-gray-800"
                          >
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });

  // test
}
