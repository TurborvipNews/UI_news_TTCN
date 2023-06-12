import React from 'react'
import styles from './SignUpForm.module.css'
import clsx from "clsx"
import axios from "axios"
import { memo, useState } from "react"
import FormInputText from "../FormInputText/FormInputText"
// router
import { useNavigate } from "react-router-dom";
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from "../../common/notify"

function SignUpForm() {

    let [loading, setLoading] = useState(false);
    const [inputPassword, setInputPassword] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputName, setInputName] = useState();
    const [inputRePass, setInputRePass] = useState();

    let navigate = useNavigate();

    const handleSubmit = () => {
        setLoading(true);
        if (inputPassword === inputRePass) {
            axios({
                method: 'post',
                url: 'http://localhost:1337/signup',
                data: {
                    password: inputRePass,
                    email: inputEmail,
                    name: inputName
                }
            })
                .then(async (res) => {
                    console.log("res", res.data)
                    if (res.data.username === false && res.data.status === 406) {
                        notify('error', 'Username was available!');
                        setLoading(false);
                    } else if (res.data.password === false && res.data.status === 406) {
                        notify('error', 'Email was available!');
                        setLoading(false);
                    } else if (res.data.status === 201) {
                        await notify('success', 'Success!');
                        await setTimeout(() => {
                            navigate(`../login`);
                        }, 4000)
                    } else if (res.data.status === 500) {
                        await notify('error', res.data.error);
                    }
                })
                .catch(error => console.log(error));
        } else {
            notify('error', 'Re-password was wrong!');
        }

    }
    const handlePassword = (e) => { setInputPassword(e.target.value) };
    const handleEmail = (e) => { setInputEmail(e.target.value) };
    const handleName = (e) => { setInputName(e.target.value) };
    const handleRePassword = (e) => { setInputRePass(e.target.value) };

    return (
        <div id="formLogin" className={styles.loginForm}>
            <div className={styles.caption}>Sign up</div>
            <FormInputText
                type='text'
                width='380px'
                label='Email'
                require
                event={handleEmail}
            />
            <FormInputText
                type='text'
                width='380px'
                label='Name'
                require
                event={handleName}
            />
            <FormInputText
                type='password'
                width='380px'
                label='Password'
                msg='At least 7 characters and 1 letter.'
                require
                event={handlePassword}
            />
            <FormInputText
                type='password'
                width='380px'
                label='Re-Password'
                require
                event={handleRePassword}
            />
            <div className={styles.formBtn}>
                <button
                    className={clsx(styles.btnSignUp, styles.btn)}
                    onClick={handleSubmit}
                    onLoad={() => setLoading(!loading)}
                >
                    Submit
                </button>
            </div>
            <ToastContainer />
        </div >
    )
}

export default memo(SignUpForm)