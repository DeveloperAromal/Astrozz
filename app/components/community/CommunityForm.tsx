"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../../utils/registeration-send-email";
import { toast } from "react-toastify";

export type FormData = {
  name: string;
  phonenumber: Number;
  email: string;
  message: string;
  classNumber: Number;
  division: Number;
  syllabus: String;
  addmission: Number;
  guardian: String;
  guardianmail: String;
};

const ComplaintForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    toast.success("Your response has been sent");
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-center text-3xl pb-10 font-bold text-sky-700 text-shadow-orange">
            Join Community
          </h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="pb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="contact-inp w-80 h-10 rounded-md border border-gray-300 bg-white py-3 pl-2 pr-2 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="pb-4">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="contact-inp w-80 h-10 rounded-md border border-gray-300 bg-white py-3 pl-2 pr-2 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="pb-4">
                  <input
                    type="tel"
                    placeholder="Phone no"
                    maxLength={12}
                    className="contact-inp w-80 h-10 rounded-md border border-gray-300 bg-white py-3 pl-2 pr-2 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register("phonenumber", { required: true })}
                  />
                </div>
                <div className="pb-4 flex gap-4">
                  <select
                    id="class"
                    className="w-56 h-10 text-black rounded-md complaint-select pl-2 pr-2"
                    {...register("classNumber", { required: true })}
                  >
                    <option value="Select your class">Select your class</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    id="class"
                    className="w-20 h-10 text-black rounded-md complaintdiv-select pl-2 pr-2"
                    {...register("division", { required: true })}
                  >
                    <option value="Div">Div</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="N">N</option>
                    <option value="O">O</option>
                    <option value="P">P</option>
                    <option value="Q">Q</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                    <option value="T">T</option>
                    <option value="U">U</option>
                    <option value="V">V</option>
                  </select>
                </div>
                <div className="pb-4 flex gap-4">
                  <select
                    id="class"
                    className="w-44 h-10 text-black rounded-md complaint-select pl-2 pr-2"
                    {...register("syllabus", { required: true })}
                  >
                    <option value="Select your class">Select syllabus</option>
                    <option value="cbse">cbse</option>
                    <option value="igcsc">igcsc</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Addmission no"
                    maxLength={7}
                    className="contact-inp w-32 h-10 rounded-md border border-gray-300 bg-white py-3 pl-2 pr-2 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register("addmission", { required: true })}
                  />
                </div>
                <div className="pb-4">
                  <input
                    type="text"
                    placeholder="Guardian Name"
                    className="contact-inp w-80 h-10 rounded-md border border-gray-300 bg-white py-3 pl-2 pr-2 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register("guardian", { required: true })}
                  />
                </div>
                <div className="pb-4">
                  <input
                    type="email"
                    placeholder="Guardian email"
                    className="contact-inp w-80 h-10 rounded-md border border-gray-300 bg-white py-3 pl-2 pr-2 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                    {...register("guardianmail", { required: true })}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-sky-700 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out"
                  >
                    Join
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
