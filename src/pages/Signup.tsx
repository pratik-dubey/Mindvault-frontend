import { useRef } from "react";
import InputHolder from "../components/inputHolder";
import { Button } from "../components/ui/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function signup() {
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            if (!username || !password) {
                alert("Please enter username and password");
                return;
            }

            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });

            alert("You have signed up successfully!");
            navigate("/signin")
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Signup failed. Please try again.");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-400 flex items-center justify-center rounded-lg p-4">
            <div className="bg-white min-h-48 min-w-48 border rounded p-8">
                <InputHolder ref={usernameRef} placeholder="Username" />
                <InputHolder ref={passwordRef} placeholder="Password" />
                <div className="pt-4">
                    <Button variant="secondary" size="lg" fullWidth={true} text="Signup" loading={false} onClick={signup} />
                </div>
            </div>
        </div>
    );
}

export default Signup;
