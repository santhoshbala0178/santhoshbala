import { BlogContainer } from "../common";
import styled from "styled-components";

const HeadSection = styled.section`
  .lg: w-6/12;
`;

const Blog1 = () => {
  return (
    <BlogContainer>
    <article className="h-entry">
      <HeadSection data-field="body" className="e-content">
        <section
          name="5e5f"
          className="section section--body section--first section--last"
        >
          <div className="section-divider" />
          <div className="section-content">
            <div className="section-inner sectionLayout--insetColumn">
              <h3
                name="8ab9"
                id="8ab9"
                className="graf graf--h3 graf--leading graf--title"
              >
                JSON.parse() — Watch your Tail.
              </h3>
              <time className="dt-published" dateTime="2018-09-07T19:48:27.541Z"
              >September 7, 2018</time>
              <figure
                name="83b6"
                id="83b6"
                className="graf graf--figure graf-after--h3"
              >
                <img
                  className="graf-image"
                  data-image-id="1*_C72USFymE-0I9yxk_YZgA.jpeg"
                  data-width="620"
                  data-height="329"
                  src="https://cdn-images-1.medium.com/max/800/1*_C72USFymE-0I9yxk_YZgA.jpeg"
                />
              </figure>
              <p name="f3a7" id="f3a7" className="graf graf--p graf-after--figure">
                With JavaScript Release 1.8.5, we are in a situation to watch
                our tails when we use JSON.parse(). The following feature may
                not be a game changer, but if not properly taken care, might end
                up being lethal to the application.
              </p>
              <h3 name="cf77" id="cf77" className="graf graf--h3 graf-after--p">
                <strong className="markup--strong markup--h3-strong"
                  >Trailing commas:</strong
                >
              </h3>
              <p name="3cfb" id="3cfb" className="graf graf--p graf-after--h3">
                It is considered to add Trailing comma during object creation,
                as below, for two reasons:
              </p>
              <ol className="postList">
                <li name="6ca7" id="6ca7" className="graf graf--li graf-after--p">
                  When we add a new property, it will be easy to add it in new
                  line
                </li>
                <li name="fc97" id="fc97" className="graf graf--li graf-after--li">
                  Also, version control wont create a diff when we add a new
                  property.
                </li>
              </ol>
              <pre
                name="2b23"
                id="2b23"
                className="graf graf--pre graf-after--li"
              >let sampleObject = <br/>    id  : &quot;ABC123&quot;,<br/>    name: &quot;Test Name&quot;,<br/>    age : 25,<br/> </pre>
              <h3 name="5fab" id="5fab" className="graf graf--h3 graf-after--pre">
                <strong className="markup--strong markup--h3-strong"
                  >JSON.parse() :</strong
                >
              </h3>
              <p name="bd1b" id="bd1b" className="graf graf--p graf-after--h3">
                On the other hand, JSON.parse() doesn’t support trailing commas
                in the stringified Object. When we try to parse a Stringified
                Object with trailing comma using JSON.parse(), we end up in
                error as below screenshots.
              </p>
              <figure
                name="ca22"
                id="ca22"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*t8FeIHw194eORvapdyD1rw.png"
                  data-width="1588"
                  data-height="588"
                  src="https://cdn-images-1.medium.com/max/800/1*t8FeIHw194eORvapdyD1rw.png"
                />
              </figure>
              <p name="a5bf" id="a5bf" className="graf graf--p graf-after--figure">
                This might be really a serious issue if a Stringified Object
                with trailing comma is sent from the backend API response and
                might break the application.
              </p>
              <h3 name="fc9e" id="fc9e" className="graf graf--h3 graf-after--p">
                <strong className="markup--strong markup--h3-strong"
                  >JSON.stringify() comes to the rescue:</strong
                >
              </h3>
              <p name="a753" id="a753" className="graf graf--p graf-after--h3">
                Though its a serious issue, when we use JavaScript to form the
                Stringified object, we can ignore this. JSON.stringify() method,
                by default, ignores the trailing commas, if any.
              </p>
              <figure
                name="60b1"
                id="60b1"
                className="graf graf--figure graf-after--p"
              >
                <img
                  className="graf-image"
                  data-image-id="1*6K8q8zTbZp9x84wY8Sojpw.png"
                  data-width="1046"
                  data-height="374"
                  src="https://cdn-images-1.medium.com/max/800/1*6K8q8zTbZp9x84wY8Sojpw.png"
                />
              </figure>
              <p
                name="0f6f"
                id="0f6f"
                className="graf graf--p graf-after--figure graf--trailing"
              >
                Though it is not a very big issue, a little awareness about this
                feature of JavaScript might be a life-saver for someone in such
                rare issue. Hope the article is useful. Thanks for reading.
              </p>
            </div>
          </div>
        </section>
      </HeadSection>
    </article>
    </BlogContainer>)
};

export default Blog1;