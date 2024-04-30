import React from "react";

const Faq = () => {
  return (
    <div>
      <h2 className="text-6xl divider divider-start mb-24 font-extrabold text-primary">FAQ</h2>
      <div className="grid grid-cols-2 gap-24">
        <div className="col-span-2 md:col-span-1">
          <img className="w-full" src="https://i.postimg.cc/0NcLK0w3/image.jpg" alt="" />
        </div>
        <div className="text-black space-y-2 col-span-2 md:col-span-1">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-black">
              How can I create my own cards?
            </div>
            <div className="collapse-content">
              <p>
                How to make a card Open Canva. Open Canva and search for "Cards"
                to start your design. Choose a template. Choose one of Canva's
                professionally-designed card templates. ... Personalize your
                card fully. Send a card that's truly personalized and from the
                heart. ... Tweak your design with more elements. ... Order your
                prints.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do you dye or stain glass?
            </div>
            <div className="collapse-content">
              <p>
                Mix food coloring and water in individual ramekins. In each
                ramekin, combine about 1 teaspoon (4.9 mL) of tap water with 4–5
                drops of food coloring dye. This will be enough to dye 1
                standard-sized mason jar. Experiment with food coloring shades
                until you find a color that you'd like to dye the glass.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What paint is used for glass painting?
            </div>
            <div className="collapse-content">
              <p>
                What Kind of Paint Do You Use on Glass? While you can find
                special glass paint, you can also use acrylic enamel, regular
                acrylic, tempera or poster paint. Each gives a different result,
                so test them out to find what works best for your project.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is a scrapbook used for?
            </div>
            <div className="collapse-content">
              <p>
                Keeping a scrapbook organizes your pictures and helps you keep a
                journal of memories. Even day to day life, when recorded,
                becomes history. Photos and memorabilia can be preserved for
                generations, if stored properly..
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is the difference between paper quilling and origami?
            </div>
            <div className="collapse-content">
              <p>
                Origami is the art of paper folding into decorative shapes and
                figures. Whereas Quilling is the art of rolling thin paper
                strips, then giving it different shapes and ultimately
                assembling those shaped paper strips' rolls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
