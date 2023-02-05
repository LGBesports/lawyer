import React, { useState } from "react";
import './Phone.scss'
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { checkInternationalPhone } from "./Validation";

export default function Phone() {
    const [phone, setPhone] = useState("");
    const [formatted, setFormatted] = useState("");
    const [valid, setValid] = useState(false);

    const handleChange = (value, data) => {
        setFormatted(value.slice(data.dialCode.length));
        setPhone(value);
        setValid(checkInternationalPhone(value.slice(data.dialCode.length)));
    };

    return (

                <ReactPhoneInput
                    value={phone}
                    isValid={checkInternationalPhone}
                    onChange={handleChange}
                    country="ng"
                />
    );
}
