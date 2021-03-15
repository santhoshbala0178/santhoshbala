import { BlogContainer } from "../common";
import styled from "styled-components";

const HeadSection = styled.section`
  .lg: w-6/12;
`;


const Blog2 = () => {
  return (
    <BlogContainer> 
      <article className="h-entry">
      <HeadSection data-field="body" className="e-content">
        <section
          name="6da4"
          className="section section--body section--first section--last"
        >
          <div className="section-divider"></div>
          <div className="section-content">
            <div className="section-inner sectionLayout--insetColumn">
              <h3
                name="4e51"
                id="4e51"
                className="graf graf--h3 graf--leading graf--title"
              >
                React Styled-Components: A smart way
              </h3>
              <time className="dt-published" dateTime="2019-11-19T20:55:35.146Z"
              >November 19, 2019</time>
              <p name="6752" id="6752" className="graf graf--p graf-after--h3">
                Simple Tricks and Tips to use Styled-Components in a better way.
              </p>
              <figure
                name="83b9"
                id="83b9"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*8slP0diGduUQy3qk9N7HsQ.png"
                  data-width="1600"
                  data-height="742"
                  data-is-featured="true"
                  src="https://cdn-images-1.medium.com/max/800/1*8slP0diGduUQy3qk9N7HsQ.png"
                />
              </figure>
              <h4
                name="fd47"
                id="fd47"
                className="graf graf--h4 graf-after--figure"
              >
                1. Props at the component level
              </h4>
              <p name="e0f8" id="e0f8" className="graf graf--p graf-after--h4">
                In styled-components, we can get access to the props of the
                component and create dynamic styles as follows.
              </p>
              <figure
                name="e1ad"
                id="e1ad"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*xPrY0mEygq3Ekp1jqpsAfg.png"
                  data-width="1086"
                  data-height="326"
                  src="https://cdn-images-1.medium.com/max/800/1*xPrY0mEygq3Ekp1jqpsAfg.png"
                />
              </figure>
              <p name="df8a" id="df8a" className="graf graf--p graf-after--figure">
                The problem in this approach is that we need to create many
                functions to access props at multiple places. So the solution is{" "}
                <strong className="markup--strong markup--p-strong"
                  >deriving props in the component level as below. </strong
                >This makes adding, removing and edits props easier.
              </p>
              <figure
                name="417c"
                id="417c"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*j2x4wSvO6oqdsD8Hqot-Cw.png"
                  data-width="1128"
                  data-height="296"
                  src="https://cdn-images-1.medium.com/max/800/1*j2x4wSvO6oqdsD8Hqot-Cw.png"
                />
              </figure>
              <h4
                name="6e58"
                id="6e58"
                className="graf graf--h4 graf-after--figure"
              >
                2. Props — Abstracting CSS and conditions
              </h4>
              <p name="42aa" id="42aa" className="graf graf--p graf-after--h4">
                As we have learned to handle props in a better way, now its time
                for abstracting and making the styles cleaner. How do we achieve
                it? We could leverage the power of
                <code className="markup--code markup--p-code">css</code> package in
                styled-components as in this
                <a
                  href="https://twitter.com/phunkren/status/1192068326442307585"
                  data-href="https://twitter.com/phunkren/status/1192068326442307585"
                  className="markup--anchor markup--p-anchor"
                  rel="noopener"
                  target="_blank"
                  >tweet</a
                >.
              </p>
              <p name="d308" id="d308" className="graf graf--p graf-after--p">
                In styled-components, we can either pass a string of styles or
                pass an array of different
                <code className="markup--code markup--p-code">css</code> strings.
                This way, we could abstract the conditions and make the styles
                cleaner as below:
              </p>
              <figure
                name="60e7"
                id="60e7"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*0rHhCXSzOfAwoF24uOSCEw.png"
                  data-width="786"
                  data-height="586"
                  src="https://cdn-images-1.medium.com/max/800/1*0rHhCXSzOfAwoF24uOSCEw.png"
                />
              </figure>
              <p name="5ef7" id="5ef7" className="graf graf--p graf-after--figure">
                In real-world applications, when the styling of a component
                grows with features, this approach will help us keep the code
                simple and readable.
              </p>
              <h4 name="e24f" id="e24f" className="graf graf--h4 graf-after--p">
                3. Inline Styles with Styled-components:
              </h4>
              <p name="e938" id="e938" className="graf graf--p graf-after--h4">
                Now that we have a cool solution to maintain styled-components
                at scale, there can be instances where we would have to override
                a few styles with inline styles. It&#39;s always good to avoid
                inline styles but in exceptional cases, we can use inline styles
                with styled-components.
              </p>
              <p name="1596" id="1596" className="graf graf--p graf-after--p">
                We already know that styled-components accept an array of CSS
                strings. We could pass the inline styles as props and add them
                to the array of styles as below.
              </p>
              <figure
                name="eff9"
                id="eff9"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*Da7fk5iMlvEjOz-8F-kK3g.png"
                  data-width="860"
                  data-height="1120"
                  src="https://cdn-images-1.medium.com/max/800/1*Da7fk5iMlvEjOz-8F-kK3g.png"
                />
              </figure>
              <p name="60ce" id="60ce" className="graf graf--p graf-after--figure">
                These are a few ways to leverage the benefits of
                styled-components. The above approaches work well with React
                Native as well. 
              </p>
            </div>
          </div>
        </section>
      </HeadSection>
    </article>
    </BlogContainer>
  );
};

export default Blog2;
