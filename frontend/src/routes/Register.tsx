import { InputField } from "../components/ui/InputField/InputField"

export default function Register() {
    return (
        <section className="formContainer">
            <div className="formImage">
                {/* svg background */}
            </div>

            <form className="form">
                <h3 className="formTitle">Register with your Email</h3>

                <InputField
                    labelName="Name"
                    fieldId="username"
                    fieldName="usernameField"
                    fieldPlaceholder=""
                    fieldType="text"
                    autoComplete="off"
                />
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
                <InputField
                    labelName="Confirm password"
                    fieldId="confirmPassword"
                    fieldName="confirmPasswordField"
                    fieldPlaceholder=""
                    fieldType="password"
                    autoComplete="off"
                />

                <button type="submit"
                    className="submitButton"
                >
                    Register
                </button>
            </form>

        </section>
    )
}