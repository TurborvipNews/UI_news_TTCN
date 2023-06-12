import clsx from "clsx"
import axios from "axios"
import FormInputText from "../FormInputText/FormInputText"
import styles from './ForgotPass.module.css'
import Toast from "../Toast/Toast"
import { useStore, actions } from '../../store'
import { memo, useState } from "react"
import OTPForgotPass from "../OTPForgotPass/OTPForgotPass"

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from "../../common/notify"
//Spinner Loader
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: 1ECFA9;
`;

function ForgotPass() {
    const [state, dispatch] = useStore();
    const [otpStatus, setOTPStatus] = useState(false);
    let [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        axios({
            method: 'post',
            url: 'http://localhost:1337/forgotpassword',
            data: {
                username: state.username,
            }
        })
            .then(async (res) => {
                // console.log(res.data, res.otp, res.res);
                if (res.data.otp && res.data.status === 202) {
                    setOTPStatus(res.data.otp);
                    await dispatch(actions.setIdUser(res.data.idUser));
                    setLoading(false);
                } else if (res.data.status === 406) {
                    notify('error', 'Username was wrong!');
                    setLoading(false);
                }
            })
            .catch(error => console.log(error));

    }
    const setInputUsername = (e) => { dispatch(actions.setUsernameLogin(e.target.value)) };

    return (
        <div id="formLogin" className={styles.loginForm}>
            <div className={styles.caption}>Forgot pass</div>
            <FormInputText
                width='380px'
                label='Username'
                msg='You can use letters, numbers and periods.'
                require
                event={setInputUsername}
            />
            <div className={styles.formBtn}>
                <button
                    className={clsx(styles.btnSignUp, styles.btn)}
                    onClick={handleSubmit}
                    onLoad={() => setLoading(!loading)}
                >
                    {
                        loading ? <ClipLoader color={"#1ECFA9"} css={override} loading={loading} size={20} /> : 'Get OTP'
                    }
                </button>
            </div>
            {otpStatus && (
                <>
                    <Toast type='warning' msg='Please check emails!' />
                    <OTPForgotPass />
                </>
            )
            }
            <ToastContainer />
        </div >
    )
}

export default memo(ForgotPass)