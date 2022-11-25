import React from "react";

function Certification({ phone, name, company, carrier }) {
    function onClickCertification() {
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init("imp01528853");

        /* 2. 본인인증 데이터 정의하기 */
        const data = {
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            company: "아임포트", // 회사명 또는 URL
            carrier: "SKT", // 통신사
            name: name, // 이름
            phone: phone, // 전화번호
            popup: true,
        };

        /* 4. 본인인증 창 호출하기 */
        IMP.certification(data, callback);
    }

    /* 3. 콜백 함수 정의하기 */
    function callback(response) {
        const { success, merchant_uid, error_msg } = response;

        if (success) {
            alert("본인인증 성공");
        } else {
            alert(`본인인증 실패: ${error_msg}`);
        }
    }

    return <button onClick={onClickCertification}>본인인증 하기</button>;
}

export default Certification;
