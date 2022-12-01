const PlusIcon = (props) => {
    return (
        <svg width={props.width || "16"} height={props.height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-flex" {...props}>
            <path d="M6.85714 16V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714Z" fill={props.fill || "white"} />
        </svg>
    );
};

export default PlusIcon;
