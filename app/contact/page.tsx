"use client";
import SelectableButton from "@/components/contact/selectable-button";
import Button from "@/components/reusable/Button";
import { ContactStateProps, SelectableButtonParam } from "@/constant/helper";
import Image from "next/image";
import React, { FormEvent, useRef, useState } from "react";
import sendEmailAction from "../action/send-email-action";

const Contact = () => {
	const formRef = useRef<HTMLFormElement | null>(null);

	const [contactState, setContactState] = useState<ContactStateProps>({
		sender_name: "",
		message: "",
		email: "",
		subject: "",
	});

	const [selectedButton, setSelectedButton] = useState("");
	const [isContactSubmit, setIsContactSubmit] = useState(false);

	const inputsClass: string =
		"px-2 py-4 rounded-md text-slate-100 bg-[#212529]";

	const sendEmail = (event: FormEvent) => {
		event.preventDefault();

		sendEmailAction(contactState)
			.then(() => {
				setIsContactSubmit(false);
				setContactState({
					sender_name: "",
					message: "",
					email: "",
					subject: "",
				});
			})
			.catch(() => {
				setIsContactSubmit(false);
			});

		// emailjs
		// 	.send(
		// 		"service_9vvtqjl",
		// 		"template_lijzhot",
		// 		contactState,
		// 		"BhzhUYs0--4eH2Oln",
		// 	)
		// 	.then(
		// 		(result) => {
		// 			setIsContactSubmit(false);
		// 			setContactState({
		// 				sender_name: "",
		// 				message: "",
		// 				email: "",
		// 				subject: "",
		// 			});
		// 		},
		// 		(error) => setIsContactSubmit(false),
		// 	);
	};

	const handleSubject = (subject: string): void => {
		setContactState({ ...contactState, subject });
		setSelectedButton(subject);
	};

	return (
		<section
			className="flex items-center my-20 bg-[#292D30] px-4 py-9"
			id="contact">
			<div className="flex flex-col justify-center items-center sm:items-start relative">
				<p className="bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
					CONTACT
				</p>
				<p className="text-2xl font-bold text-center md:text-3xl">
					Let&#39;s Make Your <span className="text-[#EE5938]">Idea</span> Into{" "}
					<span className="text-[#21939C]">Real</span>
				</p>
				<form
					className="flex flex-col w-full my-4 gap-2 relative"
					onSubmit={sendEmail}
					ref={formRef}>
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
							isActive={selectedButton === SelectableButtonParam.question}
							key="Question"
						/>
						<SelectableButton
							text="Feedback"
							addEvent={handleSubject}
							isActive={selectedButton === SelectableButtonParam.feedback}
							key="Feedback"
						/>
						<SelectableButton
							text="Work for you"
							isActive={selectedButton === SelectableButtonParam.work_for_you}
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
						}></textarea>
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
						onClick={() => setIsContactSubmit((prev) => !prev)}
						text="Submit"
						key="Submit"
						className={`${isContactSubmit ? "opacity-20" : "opacity-100"}`}
					/>
				</form>
				<div
					className={`absolute w-full items-center justify-center ${
						isContactSubmit ? "flex" : "hidden"
					}`}>
					<Image
						src="/loading.svg"
						alt="loading svg"
						width={30}
						height={30}
						className="w-20 h-auto"
					/>
				</div>
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
