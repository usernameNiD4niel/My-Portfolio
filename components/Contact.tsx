"use_client";

import Image from "next/image";
import Button from "./reusable/Button";
import { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const SelectableButton = ({
  text,
  isActive,
  addEvent,
}: {
  text: string;
  isActive: boolean;
  addEvent(subject: string): void;
}): JSX.Element => {
  return (
    <button
      type="button"
      value={text}
      onClick={() => addEvent(`I have a ${text}`)}
      name="subject"
      className={`border border-[#686A6C] rounded-lg text-sm font-light p-3 my-1 hover:opacity-80 ${
        isActive
          ? "opacity-100 bg-gradient-to-l from-[#EE5938] to-[#21939C]"
          : "opacity-90"
      }`}
    >
      {text}
    </button>
  );
};

const Contact = () => {
  const [contactState, setContactState] = useState({
    sender_name: "",
    message: "",
    email: "",
    subject: "",
  });
  const inputsClass: string =
    "px-2 py-4 rounded-md text-slate-100 bg-[#212529]";

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    emailjs
      .send(
        "service_9vvtqjl",
        "template_lijzhot",
        contactState,
        "np3RcjxrCe_jVTZ7n"
      )
      .then(
        (result) => alert(`completed: ${result.text}`),
        (error) => alert(`error: ${error}`)
      );
  };

  const handleSubject = (subject: string): void => {
    setContactState({ ...contactState, subject });
  };

  return (
    <section
      className="flex items-center my-20 bg-[#292D30] px-4 py-9"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center sm:items-start">
        <p className="bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
          CONTACT
        </p>
        <p className="text-2xl font-bold text-center md:text-3xl">
          Let&#39;s Make Your <span className="text-[#EE5938]">Idea</span> Into{" "}
          <span className="text-[#21939C]">Real</span>
        </p>
        <form className="flex flex-col w-full my-4 gap-2" onSubmit={sendEmail}>
          <input
            type="text"
            name="sender_name"
            id="sender_name"
            placeholder="Fullname"
            className={inputsClass}
            value={contactState.sender_name}
            onChange={(value) =>
              setContactState({
                ...contactState,
                sender_name: value.target.value,
              })
            }
          />
          <p className="mt-3">I have a...</p>
          <div className="flex gap-2 flex-wrap">
            <SelectableButton
              text="Question"
              addEvent={handleSubject}
              isActive={false}
              key="Question"
            />
            <SelectableButton
              text="Feedback"
              addEvent={handleSubject}
              isActive={true}
              key="Feedback"
            />
            <SelectableButton
              text="Work for you"
              isActive={false}
              addEvent={handleSubject}
              key="Work for you"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols={10}
            rows={8}
            required
            className={inputsClass}
            placeholder="What's your message?"
            value={contactState.message}
            onChange={(value) =>
              setContactState({ ...contactState, message: value.target.value })
            }
          ></textarea>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={inputsClass}
            placeholder="Email Address"
            value={contactState.email}
            onChange={(value) =>
              setContactState({ ...contactState, email: value.target.value })
            }
          />
          <Button
            isFullWidth={true}
            onClick={() => {}}
            text="Submit"
            key="Submit"
          />
        </form>
      </div>
      <div className="hidden sm:block">
        <Image
          src="/telephone.png"
          alt="Telephone picture"
          width={450}
          height={450}
          className="w-60 h-auto md:w-full"
        />
      </div>
    </section>
  );
};

export default Contact;
