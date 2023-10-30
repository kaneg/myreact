import { useContext, useEffect, useState } from 'react';

const tmp = {
  slideshow: {
    author: 'Yours Truly',
    date: 'date of publication',
    slides: [
      {
        title: 'Wake up to WonderWidgets!',
        type: 'all',
      },
      {
        items: ['Why <em>WonderWidgets</em> are great', 'Who <em>buys</em> WonderWidgets'],
        title: 'Overview',
        type: 'all',
      },
    ],
    title: 'Sample Slide Show',
  },
};

export interface Slideshow {
  author: string;
  date: string;
  slides: Slide[];
  title: string;
}

export interface Slide {
  title: string;
  type: string;
  items?: string[];
}

const Slide = (props: { slide: Slide }) => {
  let { slide } = props;
  console.log(slide.items);
  return (
    <div>
      {slide.title}({slide.type})
      <ul>
        {slide.items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

const SlideShow = () => {
  const [slideShow, setSlideShow] = useState<Slideshow | null>();
  const [reload, setReload] = useState<boolean>();
  const loadData = () => {
    fetch('https://httpbin.org/json')
      .then((rsp) => rsp.json())
      .then((json: any) => {
        let slideShow = json['slideshow'] as Slideshow;
        console.log(slideShow);
        setSlideShow(slideShow);
      });
  };

  useEffect(loadData, [reload]);

  return (
    <div>
      <button
        onClick={() => {
          setReload(!reload);
        }}
      >
        Load SlideShow
      </button>
      {!slideShow ? (
        <div>Empty</div>
      ) : (
        <div>
          <ul>
            <li>Author: {slideShow.author}</li>
            <li>Title: {slideShow.title}</li>
            <li>Date: {slideShow.date}</li>
          </ul>
          {slideShow.slides.map((s) => (
            <Slide key={s.title} slide={s} />
          ))}
        </div>
      )}
    </div>
  );
};
export default SlideShow;
export { SlideShow };
