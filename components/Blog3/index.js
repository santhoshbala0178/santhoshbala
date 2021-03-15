import { BlogContainer } from "../common";
import styled from "styled-components";

const HeadSection = styled.section`
  .lg: w-6/12;
`;


const Blog3 = () => {
  return (
    <BlogContainer> 
      <article className="h-entry">
      <HeadSection data-field="body" className="e-content">
        <section
          name="7d39"
          className="section section--body section--first section--last"
        >
          <div className="section-divider"></div>
          <div className="section-content">
            <div className="section-inner sectionLayout--insetColumn">
              <h3
                name="41bb"
                id="41bb"
                className="graf graf--h3 graf--leading graf--title"
              >
                Secret behind setState
              </h3>
              <time className="dt-published" dateTime="2019-01-27T17:39:53.084Z"
              >January 27, 2019</time>
              <p name="fe05" id="fe05" className="graf graf--p graf-after--figure">
                In general, we don’t mutate the state in react and we use
                setState to change the state of the component. Look at the
                following example:
              </p>
            </div>
            <div className="section-inner sectionLayout--outsetColumn">
              <figure
                name="b8ee"
                id="b8ee"
                className="graf graf--figure graf--layoutOutsetCenter graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*ThDp_i9-srqqu40hHEYGKw.png"
                  data-width="2620"
                  data-height="1236"
                  src="https://cdn-images-1.medium.com/max/1200/1*ThDp_i9-srqqu40hHEYGKw.png"
                />
              </figure>
            </div>
            <div className="section-inner sectionLayout--insetColumn">
              <p name="4c4b" id="4c4b" className="graf graf--p graf-after--figure">
                In the above piece of code, we have a component that displays
                the count from the state. It has two buttons — <strong
                  className="markup--strong markup--p-strong"
                  ><em className="markup--em markup--p-em"
                    >Batched setState {" "}
                  </em></strong
                >and {" "}<strong className="markup--strong markup--p-strong"
                  ><em className="markup--em markup--p-em">
                 Synchronous setState</em
                  ></strong
                >.
              </p>
              <p name="3d72" id="3d72" className="graf graf--p graf-after--p">
                The Batched setState button invokes batchedIncrement function
                which increases the count in the state by 1. Now lets add few
                more setState to the function as below:
              </p>
            </div>
            <div
              className="section-inner sectionLayout--outsetRow"
              data-paragraph-count="2"
            >
              <figure
                name="90a0"
                id="90a0"
                className="graf graf--figure graf--layoutOutsetRow is-partialWidth graf-after--p"
                style={{"width": "45.13%"}}
              >
                <img
                  className="graf-image"
                  data-image-id="1*Tu_u1P5836LUtmjTnjIn7A.png"
                  data-width="1050"
                  data-height="358"
                  src="https://cdn-images-1.medium.com/max/600/1*Tu_u1P5836LUtmjTnjIn7A.png"
                />
              </figure>
              <figure
                name="357f"
                id="357f"
                className="graf graf--figure graf--layoutOutsetRowContinue is-partialWidth graf-after--figure"
                style={{"width": "54.87%"}}
              >
                <img
                  className="graf-image"
                  data-image-id="1*6laYdQzYSGIfcSqn9AXJtA.png"
                  data-width="870"
                  data-height="244"
                  data-is-featured="true"
                  src="https://cdn-images-1.medium.com/max/800/1*6laYdQzYSGIfcSqn9AXJtA.png"
                />
              </figure>
            </div>
            <div className="section-inner sectionLayout--insetColumn">
              <p name="5c51" id="5c51" className="graf graf--p graf-after--figure">
                Inspite of adding multiple setState in the function, the count
                is incremented only once because of batching. Here all the
                setState functions are batched into one and hence, the value is
                incremented only by 1.
              </p>
              <p name="9a43" id="9a43" className="graf graf--p graf-after--p">
                Now lets consider a scenario where we need to increase the count
                based on the number of setState in a function. How do we avoid
                batching and achieve the same? The setState function holds a
                second form. Instead of accepting a object as an argument, it
                accepts a function which gets the currentState as the argument.
                Refer to the code below:
              </p>
            </div>
            <div className="section-inner sectionLayout--outsetColumn">
              <figure
                name="dada"
                id="dada"
                className="graf graf--figure graf--layoutOutsetCenter graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*gtwbNjDKtDYrlQORhBUAFg.png"
                  data-width="2570"
                  data-height="684"
                  src="https://cdn-images-1.medium.com/max/1200/1*gtwbNjDKtDYrlQORhBUAFg.png"
                />
              </figure>
            </div>
            <div className="section-inner sectionLayout--insetColumn">
              <p name="8e89" id="8e89" className="graf graf--p graf-after--figure">
                In the above piece of code, we have passed a function instead of
                object and hence, the count value is increased by 1 for each
                setState in the function. This avoids batching of setState and
                might come handy in few scenarios where the existing state
                values are used to calculate the new state values.
              </p>
            </div>
          </div>
        </section>
      </HeadSection>
    </article>
    </BlogContainer>
  );
};

export default Blog3;
