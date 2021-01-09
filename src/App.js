import React from "react";
import Scene from "./Scene";
import { slideData } from "./slideData";
import "./styles.scss";
import Slider from "./Slider";
import Fall from "./Fall";

export default function App() {
  return (
    <div className="main__container">
      <div className="layout__container">
        <div className="player__container border__right ">
          <div className="player__title__container">
            <div className="player__title border__bottom border__top">
              <div className="player__title__name">Sunday</div>
              <div className="player__title__input">Search</div>
            </div>
          </div>
          <Scene />
          <div className="player__title__container">
            <div className="player__title border__bottom border__top">
              <div className="player__title__input">Previous</div>
              <div className="player__title__name flipped">28.20.19</div>
            </div>
          </div>
        </div>

        <div className="vertical__container border__right">
          <Fall />
        </div>

        <div className="info__container border__right">
          <div className="info__items">
            <div className="info__items__gradient"></div>
            <div className="info__items__content">
              <div className="info__items__content__title">
                Bring back all those <span>colors</span>
              </div>
              <div className="info__items__content__artist">Next sisulele</div>

              <div className="info__items__content__description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </div>

              <div className="info__items__content__lyrics">
                <Slider heading="Example Slider" slides={slideData} />
              </div>
            </div>
          </div>

          {/*   */}
        </div>
        <div className="side__container">
          <div className="side__items">
            <div className="side__items__info border__right">
              <div className="side__items__info__text">publishing</div>
            </div>
            <div className="side__items__description">
              <div class="ticker-wrap border__right">
                <div class="ticker">
                  <div class="ticker__item">Letterpress chambray brunch.</div>
                  <div class="ticker__item">
                    Vice mlkshk crucifix beard chillwave meditation hoodie
                    asymmetrical Helvetica.
                  </div>
                  <div class="ticker__item">
                    Ugh PBR&B kale chips Echo Park.
                  </div>
                  <div class="ticker__item">
                    Gluten-free mumblecore chambray mixtape food truck.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="side__items__info__grad">
              <div className="gradient__rect"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
