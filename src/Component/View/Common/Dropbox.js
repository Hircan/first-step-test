import { Dropdown } from "react-bootstrap";

export const Filter = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>최신순</Dropdown.Item>
                <Dropdown.Item>인기순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
