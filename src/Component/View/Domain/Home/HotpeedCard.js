import { H4, Span } from "../../Common/Typography";
import profileData from "./profileData";
import logo from "../../Common/SVG/test/logo.svg";
const HotpeedCard = (props) => {
    return (
        <section className="p-2">
            <img src={logo} alt="section 이미지" width="152px" height="200px" loading="lazy" />
            <H4>{props.subject}</H4>
            <Span>{props.title}</Span>
        </section>
    );
};

export default HotpeedCard;
