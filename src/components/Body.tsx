import React, { useEffect, useState } from 'react';
import userStore from '../stores/userStore';
import { requestSignUp } from '../utils/http/users';
import { SignUpRequest } from '../utils/http/users/requests';

function Body(): JSX.Element {
    const [signUpFormData, setSignUpFormData] = useState<SignUpRequest>({
        userName: undefined,
        email: undefined,
        address: undefined,
        age: undefined,
    });

    useEffect(() => {
      userStore.dispatch({type: 'INITIALIZE'});

      setSignUpFormData(userStore.getState())
    
      return () => {
        console.log('Page cleanup');
      }
    }, [])
    

    const onChangeSignUpForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        setSignUpFormData(prev => {
            return {
                ...prev,
                [e.target.name]: String(e.target.value)
            }
        })
    }

    const onClickSignUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        e.preventDefault();

        try {
            await requestSignUp(signUpFormData);
        } catch (error) {
            alert(error);
        }
    }

    const onClickGetUserData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();

        userStore.dispatch({type: 'SET_USER'});

        setSignUpFormData(userStore.getState())
    }
    
    
    return <>
        <div>
            <form>
                Name : <input 
                    type="text"
                    name="userName"
                    onChange={onChangeSignUpForm}
                /><br />
                Email : <input 
                    type="text"
                    name="email"
                    onChange={onChangeSignUpForm}
                /><br />
                Address : <input 
                    type="text"
                    name="address"
                    onChange={onChangeSignUpForm}
                /><br />
                Age : <input 
                    type="number"
                    name="age"
                    onChange={onChangeSignUpForm}
                /><br />
                <button onClick={onClickSignUp}>Sign Up</button>
                <button onClick={onClickGetUserData}>Get Saved Data</button>
            </form>
            <p>User Information</p>
            <p>{signUpFormData.userName}</p>
            <p>{signUpFormData.email}</p>
            <p>{signUpFormData.address}</p>
            <p>{signUpFormData.age}</p>
        </div>
    </>;
}

export default Body;