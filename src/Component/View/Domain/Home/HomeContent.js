import Banner from "./Banner";
import { Filter } from "../../Common/Dropboxs";
import Certification from "../../../../Util/Certification";
import CryptoJS from "crypto-js";
import { InputText } from "../../Common/InputBoxes";
import { H4 } from "../../Common/Typography";
import Floatting from "../../Common/Buttons/Floatting";
import HotProfile from "./HotProfile";
import ProfileCard from "./ProfileCard";

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
                        <source media="all" srcSet={data.image} />
                        <img src="/logo192.png" alt="section ?????????" width="100%" height="300px" loading="lazy" />
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
            {/* <Payment /> */}
        </>
    );
};
const SMSApiTest = () => {
    var user_phone_number = "010-2414-7762"; //?????? ???????????? ??????
    var resultCode = 404;
    const date = Date.now().toString();
    const uri = "ncp:sms:kr:296737339859:sms_send_test"; //????????? ID
    const secretKey = "6I1KmeE1eQ2LAmNQ0VuS7AdLEEMCY2QbnVQNF50U"; // Secret Key
    const accessKey = "KLVEMmAUVTF0GHvYVnuS"; //Access Key

    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
    const url2 = `/sms/v2/services/${uri}/messages`;

    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);

    const hash = hmac.finalize();
    const signature = hash.toString(CryptoJS.enc.Base64);

    fetch(`https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`, {
        method: "POST",
        headers: {
            "Contenc-type": "application/json; charset=utf-8",
            "x-ncp-iam-access-key": accessKey,
            "x-ncp-apigw-timestamp": date,
            "x-ncp-apigw-signature-v2": signature,
        },
        body: {
            type: "SMS",
            countryCode: "82",
            from: "010-2414-7762",
            content: "???????????? [123456]?????????.",
            messages: [{ to: `${user_phone_number}` }],
        },
    }).then((response) => console.log(response));
};
const HomeContent = () => {
    return (
        <div style={{ paddingTop: "52px", paddingBottom: "150px" }}>
            <Banner />

            <HotProfile />
            <ProfileCard />
            <Floatting />
        </div>
    );
};

export default HomeContent;
