import React from 'react';
import {useForm} from "react-hook-form";
import LinkButton from "../LinkButton/LinkButton";
import personIcon from "../../assets/icons/person.svg";
import emailIcon from "../../assets/icons/email.svg";
import penIcon from "../../assets/icons/pen.svg";
import styles from "./style.module.css";

const FormComponent = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputWrapper}>
                <span className={styles.inputLine}/>
                <input className={styles.input}
                       style={{
                           background: `url(${personIcon}) no-repeat scroll 17px 12px`,
                           backgroundPosition: '22px center',
                           backgroundPositionY: '19px',
                       }}
                       {...register("name", {
                           required: true,
                       })}
                />
            </div>
            <div className={styles.inputWrapper}>
                <span className={styles.inputLine}/>
                <input className={styles.input}
                       style={{
                           background: `url(${emailIcon}) no-repeat scroll 16px 16px`,
                           backgroundPosition: '22px center',
                           backgroundPositionY: '21px',
                       }}
                       {...register("email", {
                           required: true,
                       })}
                />
            </div>
            <div className={styles.formTextAreaWrapper}>
                <span className={styles.textAreaLine} />
                <textarea
                    className={styles.formTextArea}
                    style={{
                        background: `url(${penIcon}) no-repeat scroll 20px 20px`,
                        backgroundPosition: '22px center',
                        backgroundPositionY: '16px',
                    }}
                    name="textarea"
                    rows="2"
                    col="2"
                    placeholder="Ask your question"
                />
            </div>
            <LinkButton
                buttonType={'submit'}
                children={'Send a message'}
                linkButtonStyle={styles.formButton}
            />
        </form>
    );
};

export default FormComponent;