import React from 'react';
import {useForm} from 'react-hook-form';
import LinkButton from '../LinkButton/LinkButton';
import personIcon from '../../assets/icons/person.svg';
import emailIcon from '../../assets/icons/email.svg';
import penIcon from '../../assets/icons/pen.svg';
import './styles.css';

const FormComponent = () => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputWrapper'>
                <span className='inputLine'/>
                <input className='input'
                       style={{
                           background: `url(${personIcon}) no-repeat scroll 17px 12px`,
                           backgroundPosition: '22px center',
                           backgroundPositionY: '19px',
                       }}
                       {...register("firstName", {
                           required: true,
                       })}
                       placeholder="Name"
                />
            </div>
            <div className='inputWrapper'>
                <span className='inputLine'/>
                <input className='input'
                       style={{
                           background: `url(${emailIcon}) no-repeat scroll 16px 16px`,
                           backgroundPosition: '22px center',
                           backgroundPositionY: '21px',
                       }}
                       {...register("email", {
                           required: true,
                       })}
                       placeholder="Your email"
                />
            </div>
            <div className='formTextAreaWrapper'>
                <span className='textAreaLine'/>
                <textarea
                    className='formTextArea'
                    style={{
                        background: `url(${penIcon}) no-repeat scroll 20px 20px`,
                        backgroundPosition: '22px center',
                        backgroundPositionY: '16px',
                    }}
                    {...register("question", {
                        required: true,
                    })}
                    rows="2"
                    col="2"
                    placeholder="Ask your question"
                />
            </div>
            <LinkButton
                buttonType={'submit'}
                children={'Send a message'}
                linkButtonStyle={'formButton'}
            />
        </form>
    );
};

export default FormComponent;