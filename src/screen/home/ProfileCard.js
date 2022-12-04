import { Card, Container } from "react-bootstrap";
import H4 from "typography/H4";
import Span from "typography/Span";
import profileData from "./profileData";
import style from "./ProfileCard.module.css";

export default function ProfileCard() {
    return (
        <>
            {profileData.map((user) => (
                <Container className="text-center">
                    <div>
                        <img src={user.image} data-src={"/images/icons/Asset 4@3x 1.png"} loading="lazy" className={style.img} />
                        <H4 className={style.subject}>{user.subject}</H4>
                        <Span className={style.title}>{user.title}</Span>
                    </div>
                </Container>
            ))}
        </>
    );
}
