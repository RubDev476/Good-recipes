import { InputField } from "../components/ui/InputField/InputField"

export default function Login() {
    return (
        <>
            <section className="formContainer">
                <div className="formImage">
                    {/* svg background */}
                </div>

                <form className="form">
                    <h3 className="formTitle">Login</h3>

                    <InputField
                        labelName="Email"
                        fieldId="email"
                        fieldName="emailField"
                        fieldPlaceholder=""
                        fieldType="email"
                        autoComplete="off"
                    />
                    <InputField
                        labelName="Password"
                        fieldId="password"
                        fieldName="passwordField"
                        fieldPlaceholder=""
                        fieldType="password"
                        autoComplete="off"
                    />

                    <button type="submit"
                        className="submitButton"
                    >
                        Login
                    </button>
                </form>
            </section>
        </>
    )
}