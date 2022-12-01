<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2.5H22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 17.5H22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>;
const ToggleIcon = (props) => {
    return (
        <svg width={props.width || "24"} height={props.height || "20"} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-flex" {...props}>
            <path d="M2 2.5H22" stroke={props.fill || "white"} stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 17.5H22" stroke={props.fill || "white"} stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default ToggleIcon;
