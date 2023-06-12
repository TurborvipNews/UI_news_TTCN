import styles from './OTPForm.module.css'
import { useStore, actions } from '../../store'
import axios from 'axios';
import CountDown from '../CountDown/CountDown'
import { useLayoutEffect, useState } from 'react'
import clsx from 'clsx';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from "../../common/notify"
// Loader
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
// Router
import { useNavigate } from "react-router-dom";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: 1ECFA9;
`;

function OTPForm() {
    const [state, dispatch] = useStore();
    const [otp1, setOTP1] = useState('');
    const [otp2, setOTP2] = useState('');
    const [otp3, setOTP3] = useState('');
    const [otp4, setOTP4] = useState('');
    const [otp5, setOTP5] = useState('');
    const [otp6, setOTP6] = useState('');
    const [otp, setOTP] = useState([otp1, otp2, otp3, otp4, otp5, otp6]);

    let [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    useLayoutEffect(() => {
        setOTP([otp1, otp2, otp3, otp4, otp5, otp6])
    }, [otp1, otp2, otp3, otp4, otp5, otp6])

    const handleOTP = (e, next) => {
        if (e.target.value) {
            document.getElementById(next).focus();
        }
    }

    const handleSetOTP = (value, option) => {
        switch (option) {
            case 1: {
                setOTP1(value);

                break
            }
            case 2: {
                setOTP2(value);
                break;
            }
            case 3: {
                setOTP3(value);
                break;
            }
            case 4: {
                setOTP4(value);
                break;
            }
            case 5: {
                setOTP5(value);
                break;
            }
            case 6: {
                setOTP6(value);
                break;
            }
            default:
                throw new Error('Invalid option.')
        }

    }

    const handleComfirm = () => {
        let otpString = '';
        otp.map(item => { return otpString += item.toString() })
        console.log(otpString);
        setLoading(true);
        axios({
            method: 'post',
            url: 'http://localhost:1337/checkotp',
            data: {
                OTPClient: +otpString,
                idUser: state.idUser,
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 404 && res.data.otp === false) {
                    notify('error', 'OTP was wrong');
                    setLoading(false);
                } else if (res.data.status === 404 && res.data.otp === 'expired') {
                    notify('error', 'OTP was expired');
                    setLoading(false);
                } else if (res.data.status === 404 && res.data.otp === 'different device') {
                    notify('error', 'OTP Forbidden');
                    setLoading(false);
                } else if (res.data.res) {
                    // save to local storage
                    localStorage.setItem('accessToken', res.data.accessToken);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    // ==> next home page
                    dispatch(actions.setAuthUser(true));
                    navigate(`../`);
                    console.log('next/home');
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div className={styles.OTPForm}>
            <div>
                <div className={styles.allInput}>
                    <input id='first' className={clsx(styles.input, 'inputValue')} type="text" maxLength="1" onChange={(e) => handleSetOTP(e.target.value, 1)} onKeyUp={(e) => handleOTP(e, 'sec')} />
                    <input id='sec' className={clsx(styles.input, 'inputValue')} type="text" maxLength="1" onChange={(e) => handleSetOTP(e.target.value, 2)} onKeyUp={(e) => handleOTP(e, 'third')} />
                    <input id='third' className={clsx(styles.input, 'inputValue')} type="text" maxLength="1" onChange={(e) => handleSetOTP(e.target.value, 3)} onKeyUp={(e) => handleOTP(e, 'fourth')} />
                    <input id='fourth' className={clsx(styles.input, 'inputValue')} type="text" maxLength="1" onChange={(e) => handleSetOTP(e.target.value, 4)} onKeyUp={(e) => handleOTP(e, 'fifth')} />
                    <input id='fifth' className={clsx(styles.input, 'inputValue')} type="text" maxLength="1" onChange={(e) => handleSetOTP(e.target.value, 5)} onKeyUp={(e) => handleOTP(e, 'six')} />
                    <input id='six' className={clsx(styles.input, 'inputValue')} type="text" maxLength="1" onChange={(e) => handleSetOTP(e.target.value, 6)} />
                </div>
                <span className={styles.msg}>
                    Check mail to get OTP...<CountDown time={60} />
                </span>
            </div>
            <button
                className={styles.btn}
                onClick={handleComfirm}
            >
                {
                    loading ? <ClipLoader color={"#1ECFA9"} css={override} loading={loading} size={20} /> : 'Comfirm'
                }
            </button>
            <ToastContainer />
        </div>
    )
}
export default OTPForm
