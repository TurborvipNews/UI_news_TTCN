import clsx from 'clsx'
import styles from './Modal.module.css'
function Modal() {
    return (
        <div className={clsx(styles.formModal)}>
            <div className={clsx(styles.modal)}></div>
        </div>
    )
}
export default Modal