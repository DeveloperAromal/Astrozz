"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { sendEmail } from "../../../utils/send-msg";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export type FormData = {
  name: string;
  email: string;
  classSelected: number;
  divSelected: string;
  score: number;
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [classSelected, setClassSelected] = useState<number>(0);
  const [divSelected, setDivSelected] = useState<string>("");
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    let apiUrl = "";
    switch (classSelected) {
      case 1:
      case 2:
        apiUrl = "https://dpsapi-two.vercel.app/root/quiz1.json";
        break;
      case 3:
      case 4:
      case 5:
        apiUrl = "https://dpsapi-two.vercel.app/root/quiz2.json";
        break;
      case 6:
      case 7:
      case 8:
        apiUrl = "https://dpsapi-two.vercel.app/root/quiz3.json";
        break;
      case 9:
      case 10:
        apiUrl = "https://dpsapi-two.vercel.app/root/quiz4.json";
        break;
      case 11:
      case 12:
        apiUrl = "https://dpsapi-two.vercel.app/root/quiz5.json";
        break;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error("Error fetching questions:", error));
  }, [classSelected]);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data?.user) {
      toast.success("Logged in successfully");
      setLoggedIn(true);
    } else if (error) {
      toast.error("Email or Password does not match");
    }
  };

  const handleAnswerClick = (selectedOption: string) => {
    const currentQuestionData = questions[currentQuestion];
    if (currentQuestionData) {
      const isCorrect = currentQuestionData.answer === selectedOption;
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleQuizCompletion = () => {
    if (currentQuestion >= questions.length) {
      const formData: FormData = {
        name,
        email,
        classSelected,
        divSelected: divSelected || "",
        score,
      };
      sendEmail(formData);

      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!quizCompleted && loggedIn) {
      timer = setTimeout(() => {
        handleQuizCompletion();
      }, 300000); // 5 minutes timer
    }

    return () => clearTimeout(timer);
  }, [loggedIn, quizCompleted]);

  if (quizCompleted) {
    return (
      <section className="flex items-center justify-center">
        <div>
          <p>All questions answered!</p>
        </div>
      </section>
    );
  }

  if (loggedIn) {
    if (questions.length > 0) {
      if (currentQuestion >= questions.length) {
        handleQuizCompletion();
        return (
          <section className="flex items-center justify-center">
            <div>
              <p>All questions answered!</p>
            </div>
          </section>
        );
      } else {
        const currentQuestionData = questions[currentQuestion];
        return (
          <section className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Astronomy Quiz
              </h1>
              {currentQuestionData && (
                <>
                  <p className="text-lg text-gray-700 mb-6 px-6">
                    {currentQuestionData.question}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentQuestionData.options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full px-8 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out"
                        onClick={() => handleAnswerClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <p className="text-lg text-gray-700 mt-6">
                Score: {score} / {questions.length}
              </p>
            </div>
          </section>
        );
      }
    } else {
      return (
        <section>
          <div>
            <p>No questions available.</p>
          </div>
        </section>
      );
    }
  }

  return (
    <section>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div>
            <div>
              <h1 className="text-center text-sky-600 font-bold text-3xl py-8">
                Login to start
              </h1>
            </div>
            <div className="pb-2">
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              />
            </div>
            <div className="pb-4 flex gap-4">
              <select
                id="class"
                className="w-40 h-10 text-black rounded-md complaint-select pl-2 pr-2"
                value={classSelected}
                onChange={(e) => setClassSelected(parseInt(e.target.value))}
              >
                <option value="0">Select your class</option>
                {[...Array(12)].map((_, i) => (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                id="class"
                className="w-20 h-10 text-black rounded-md complaintdiv-select pl-2 pr-2"
                value={divSelected}
                onChange={(e) => setDivSelected(e.target.value)}
              >
                <option value="">Div</option>
                {[...Array(22)].map((_, i) => (
                  <option value={String.fromCharCode(65 + i)} key={i}>
                    {String.fromCharCode(65 + i)}
                  </option>
                ))}
              </select>
            </div>
            <div className="pb-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              />
            </div>
            <div className="pb-2">
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                maxLength={8}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="px-10 bg-sky-600 py-2 rounded-2xl"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
