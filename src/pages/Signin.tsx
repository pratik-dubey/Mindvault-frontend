import axios from 'axios';
import InputHolder from '../components/inputHolder'
import { Button } from '../components/ui/button'
import { BACKEND_URL } from '../config';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function signin() {
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            if (!username || !password) {
                alert("Please enter username and password");
                return;
            }

            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
            });

            // in axios , we get the data returned by backend using response.data and to get jwt we do another .token
            const jwt = response.data.token
            localStorage.setItem("token", jwt)
            alert("Signed in successfully")
            navigate("/dashboard")
        } catch (error) {
            console.error("Signin Error:", error);
            alert("Signin failed. Please try again.");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-400 flex items-center justify-center rounded-lg p-4">
            <div className="bg-white min-h-48 min-w-48 border rounded p-8">
                <InputHolder ref={usernameRef} placeholder='Username' />
                <InputHolder ref={passwordRef} placeholder='Password' />
                <div className='pt-4'>
                    <Button variant='secondary' size='lg' fullWidth={true} text='Signin' loading={false} onClick={signin}/>
                </div>
            </div>
        </div>
    )
}

export default Signin