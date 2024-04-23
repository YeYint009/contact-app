import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handlerInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContainerComponent>
      <div className="Center">
        <div className=" w-2/6 h-auto">
          <h1 className=" font-serif text-4xl text-center mb-10">
            Login Your Contact
          </h1>
          <form className=" space-y-7 mt-5" onSubmit={handlerSubmit}>
            <FormComponent
              value={formData.email}
              onChange={handlerInputChange}
              name={"email"}
              type={"email"}
              label={"Enter Your Email"}
              placeholder="example@gmail.com"
            />
            <FormComponent
              value={formData.password}
              onChange={handlerInputChange}
              name={"password"}
              type={"number"}
              label={"Password"}
              placeholder="8-digits"
            />
            <ButtonComponent type={"submit"} style={"!rounded-lg"} >
              Login
            </ButtonComponent>
          </form>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
