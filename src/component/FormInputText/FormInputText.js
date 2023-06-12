import styles from './FormInputText.module.css'

function FormInputText({ type, placeholder, width, label, require, msg, event }) {
    return (
        <div className={styles.formInput}>
            {label && (
                <label className={styles.label}>{label} {require && (
                    <span className={styles.require}>*</span>
                )}</label>
            )}
            <input
                type={type}
                className={styles.input}
                placeholder={placeholder ? placeholder : ''}
                style={{ width: width ? width : '300px' }}
                onChange={event ? event : ''}
            />
            <span className={styles.msg}>{msg}</span>
        </div>
    )
}
export default FormInputText