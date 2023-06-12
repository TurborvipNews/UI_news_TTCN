import clsx from "clsx";
import FormInputText from "../FormInputText/FormInputText";
import styles from "./LoginForm.module.css";
import Toast from "../Toast/Toast";
import { useStore, actions } from "../../store";
import { memo, useState } from "react";
import OTPForm from "../OTPForm/OTPForm";
// router
import { Link, useNavigate } from "react-router-dom";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../common/notify";
//Spinner Loader
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { login } from "../../ApiService/index";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: 1ECFA9;
`;

function LoginForm() {
  const [state, dispatch] = useStore();
  const [otpStatus, setOTPStatus] = useState(false);
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    login(state.username, state.password)
      .then(async (res) => {
        if(!res){
            notify("error", 'Password or Email is wrong');
            setLoading(false);
        }else{
            localStorage.setItem("accessToken", res?.token);
            localStorage.setItem("user", JSON.stringify(res?.user));
            await dispatch(actions.setAuthUser(true));
            navigate(`../admin`);
        }
      })
      .catch((error) => console.log(error));
  };
  const setInputUsername = (e) => {
    dispatch(actions.setUsernameLogin(e.target.value));
  };
  const setInputPassword = (e) => {
    dispatch(actions.setPasswordLogin(e.target.value));
  };

  return (
    <div id="formLogin" className={styles.loginForm}>
      <div className={styles.caption}>Sign in</div>
      <FormInputText
        width="380px"
        label="Username"
        msg="You can use letters, numbers and periods."
        require
        event={setInputUsername}
      />
      <FormInputText
        type="password"
        width="380px"
        label="Password"
        require
        event={setInputPassword}
      />
      <div className={styles.formBtn}>
        <Link to={"/forgotpass"}>
          <button className={clsx(styles.btnForgot, styles.btn)}>
            Forgot?
          </button>
        </Link>
        <button
          className={clsx(styles.btnSignUp, styles.btn)}
          onClick={handleSubmit}
          onLoad={() => setLoading(!loading)}
        >
          {loading ? (
            <ClipLoader
              color={"#1ECFA9"}
              css={override}
              loading={loading}
              size={20}
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
      {otpStatus && (
        <>
          <Toast type="warning" msg="You logged another device!" />
          <OTPForm />
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default memo(LoginForm);
