import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import s from "./ReturnButton.module.css";

function ReturnButton() {
    const location = useLocation();
    const navigate = useNavigate();


    const backLink = useRef(location.state ?.from ?? "/movies");


    const handleReturn = () => {
        navigate(backLink.current);
    };

    return (
        <button className={s.returnButton} onClick={handleReturn}>
            Return
        </button>
    );
}

export default ReturnButton;