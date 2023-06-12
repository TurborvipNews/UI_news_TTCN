import React from 'react'
import clsx from "clsx"
import styles from './ChangePass.module.css'
import axios from "axios"
import FormInputText from '../FormInputText/FormInputText'
import { memo, useState } from "react"
import { useStore, actions } from '../../store'
// router
import { useNavigate } from "react-router-dom";
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
function ChangePass() {
    // eslint-disable-next-line
    const [state, dispatch] = useStore();
    let [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    let navigate = useNavigate();
    const handleSubmit = () => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        let token = localStorage.getItem('accessToken');
        if (newPassword === rePassword && user && token) {

            axios({
                method: 'post',
                url: 'http://localhost:1337/changepass',
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                data: {
                    password: password,
                    rePassword: rePassword,
                    idUser: user.id,
                }
            })
                .then(async (res) => {
                    if (res.data.status === 404) {
                        notify('error', 'Password was wrong!');
                        setLoading(false);
                    } else if (res.data.status === 500) {
                        notify('error', res.data.error);
                        setLoading(false);
                    } else if (res.data.status === 200) {
                        localStorage.clear();
                        notify('success', res.data.msg);
                        setTimeout(async () => {
                            await dispatch(actions.setAuthUser(false));
                            await navigate(`../login`);
                        }, 3000)

                    }
                })
                .catch(error => console.log(error));
        } else {
            notify('error', 'Re-Password was wrong!');
        }


    }
    const handleInputPassword = (e) => setPassword(e.target.value);
    const handleInputNewPassword = (e) => setNewPassword(e.target.value);
    const handleInputRePassword = (e) => setRePassword(e.target.value);
    return (
        <div id="formLogin" className={styles.loginForm}>
            <div className={styles.caption}>Change Password :</div>
            <FormInputText
                type='password'
                width='380px'
                label='Password'
                require
                event={handleInputPassword}
            />
            <FormInputText
                type='password'
                width='380px'
                label='New Password'
                require
                event={handleInputNewPassword}
            />
            <FormInputText
                type='password'
                width='380px'
                label='Re-Password'
                require
                event={handleInputRePassword}
            />
            <div className={styles.formBtn}>
                <button
                    className={clsx(styles.btnSignUp, styles.btn)}
                    onClick={handleSubmit}
                    onLoad={() => setLoading(!loading)}
                >
                    {
                        loading ? <ClipLoader color={"#1ECFA9"} css={override} loading={loading} size={20} /> : 'Submit'
                    }
                </button>
            </div>
            <ToastContainer />
        </div >
    )
}

export default memo(ChangePass);