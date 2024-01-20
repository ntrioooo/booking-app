import React from "react";

function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category=${index1}`}>
        <h4 className="mb-3 mt-20 font-semibold p-4 text-2xl">
          {category.name}
        </h4>
        <div className="grid grid-cols-3 gap-4">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="">
                        Popular <span className="font-light">Choice</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}

export default Categories;
