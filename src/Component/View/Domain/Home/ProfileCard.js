import { Card } from "react-bootstrap";
import { H4, Span } from "../../Common/Typography";
import profileData from "./profileData";

export default function ProfileCard() {
    return (
        <>
            {profileData.map((user) => (
                <>
                    <img src={user.image} data-src={"/images/icons/Asset 4@3x 1.png"} loading="lazy" width="200px" height="200px" />
                    <H4>{user.subject}</H4>
                    <Span>{user.title}</Span>
                </>
            ))}
        </>
    );
}
