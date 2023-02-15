import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/Ai";
import { FaAddressCard } from "react-icons/Fa";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

function ContactMe({}: Inputs) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:tharakahalkewelatecs@hmail.com?subject=${formdata.subject}&body= Hi my name is ${formdata.name}.${formdata.message}`;
  };
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl justify-center xl:space-y-0 top-10 ">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlinePhone
              color="#F7AB0A"
              className="text-4xl text-gray-500"
            />
            <p className="text-2xl">+94719034913</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaAddressCard color="#F7AB0A" className="text-4xl text-gray-500" />
            <p className="text-2xl">Not in exact location,Kurunegala</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlineMail color="#F7AB0A" className="text-4xl text-gray-500" />
            <p className="text-2xl">tharakahalkewelatecs@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] text-lg py-5 px-10 rounded-md text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
