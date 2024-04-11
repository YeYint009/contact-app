import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <ContainerComponent>
      <div className="flex justify-center items-center h-screen">
        <div className=" w-2/6 h-auto">
          <h1 className=" font-serif text-2xl text-center">
            Login Your Contact
          </h1>
          <form className=" space-y-7 mt-5">
            <FormComponent
              name={"Email"}
              type={"email"}
              label={"Enter Your Email"}
              placeholder="example@gmail.com"
            />
            <FormComponent
              name={"Password"}
              type={"password"}
              label={"Password"}
              placeholder="8-digits"
            />
            <ButtonComponent type={"submit"} />
          </form>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
