export const MyPageContent = () => {
    return (
        <>
            <h3>프로필</h3>
            <span>
                지금 당장 꿈을 향한 <strong>첫걸음</strong>을 내딛어보세요.
            </span>
            <hr />
            <button className="d-flex justify-content-center align-items-center">
                <span className="material-icons">favorite</span>로그인 <span className="material-icons">chevron_right</span>
            </button>
            <p>
                첫걸음 계정이 없나요? <strong>회원가입</strong>
            </p>
        </>
    );
};
