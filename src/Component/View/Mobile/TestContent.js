import Banner from "./Banner";
import { Filter } from "../Common/Dropbox";
import { Payment } from "../../../Util/Pay";

const contentData = [
    {
        id: 1,
        name: "test1",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "60",
        views: "1.8k",
    },
    {
        id: 2,
        name: "test2",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "60",
        views: "1.3k",
    },
    {
        id: 3,
        name: "test3",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "70",
        views: "1.2k",
    },
    {
        id: 4,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 5,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 6,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 7,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 8,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 9,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 10,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 11,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 12,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
    {
        id: 13,
        name: "test4",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        likes: "50",
        views: "1.5k",
    },
];

const Contents = () => {
    return (
        <>
            {contentData.map((data) => (
                <section className="p-2" key={data.id}>
                    <picture>
                        <source media="all" srcset={data.image} />
                        <img src="/logo192.png" alt="section 이미지" width="100%" height="300px" loading="lazy" />
                    </picture>

                    <div className="d-flex justify-content-between">
                        <span>{data.name}</span>
                        <div>
                            <span className="me-2">{data.likes}</span>
                            <span>{data.views}</span>
                        </div>
                    </div>
                </section>
            ))}
            <Payment />
        </>
    );
};

const TestContent = () => {
    return (
        <div style={{ paddingBottom: "150px" }}>
            <Banner />
            <Filter />
            <Contents />
            <button className="bg-white rounded-5 position-fixed" style={{ right: "50px", bottom: "100px" }}>
                <span>+</span>
            </button>
        </div>
    );
};

export default TestContent;
