"use client";

import emailjs from "@emailjs/browser";

import SelectableButton from "@/components/contact/selectable-button";
import Button from "@/components/reusable/Button";
import {
	ContactStateProps,
	NavigationText,
	SelectableButtonParam,
} from "@/constant/helper";
import Image from "next/image";
import React, { FormEvent, useRef, useState } from "react";
import TabActivator from "@/components/reusable/TabActivator";

const Contact = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const [open, setOpen] = useState(false);

	const initialState = {
		sender_name: "",
		message: "",
		email: "",
		subject: "",
	};

	const closeModal = () => {
		setOpen(false);
	};

	const [contactState, setContactState] =
		useState<ContactStateProps>(initialState);

	const [selectedButton, setSelectedButton] = useState("");
	const [isContactSubmit, setIsContactSubmit] = useState(false);

	const inputsClass: string =
		"px-2 py-4 rounded-md text-slate-100 bg-[#212529]";

	const sendEmail = (event: FormEvent) => {
		event.preventDefault();
		console.log(`prevent ${formRef.current ? "yes" : "no"}`);
		if (!formRef.current) {
			return;
		}
		console.log("current");

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		console.log(
			`service ${serviceId} template ${templateId} pulic key ${publicKey}`,
		);

		if (serviceId && templateId && publicKey) {
			emailjs
				.send(serviceId, templateId, contactState, publicKey)
				.then((data) => {
					setContactState(initialState);
					setOpen(data.status <= 299);
					console.log(`status ${data.status} ${data.text}`);
				})
				.catch(() => alert("Cannot send the email, please try again later."))
				.finally(() => {
					console.log("finally run!");
					setIsContactSubmit(false);
				});
		}
	};

	const handleSubject = (subject: string): void => {
		setContactState({ ...contactState, subject });
		setSelectedButton(subject);
	};

	return (
		<section className="flex justify-center my-20 bg-primary px-4 py-9">
			<TabActivator viewing={NavigationText.Contact} />
			<div className="flex items-center p-9 pe-0 w-full bg-secondary rounded-md md:max-w-4xl">
				<div className="flex flex-col justify-center relative">
					<p className="bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
						CONTACT
					</p>
					<p className="text-2xl font-bold md:text-3xl">
						Let&#39;s Make Your <span className="text-[#EE5938]">Idea</span>{" "}
						Into <span className="text-[#21939C]">Real</span>
					</p>
					<form
						className="flex flex-col w-full gap-y-2"
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
								setContactState({
									...contactState,
									message: value.target.value,
								})
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
							type="submit"
							// onClick={() => setIsContactSubmit((prev) => !prev)}
							text="Submit"
							className={`${isContactSubmit ? "opacity-20" : "opacity-100"}`}
						/>
					</form>
					{/* {isContactSubmit && (
						<div className={`absolute w-full flex items-center justify-center`}>
							<Image
								src="/loading.svg"
								alt="loading svg"
								width={30}
								height={30}
								className="w-20 h-auto"
							/>
						</div>
					)} */}
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
			</div>
			<dialog
				className="bg-secondary space-y-2 text-white w-full fixed inset-0 max-w-md rounded-md p-8"
				ref={dialogRef}
				open={open}>
				<h4 className="font-semibold">Sent Successfully!</h4>
				<p className="text-sm">
					You have successfully send an email to Daniel, we also send you an
					acknowledgement email for this, Thank you.
				</p>
				<div className="w-full flex justify-end pt-2">
					<button
						type="button"
						className="font-medium hover:underline"
						onClick={closeModal}>
						Close
					</button>
				</div>
			</dialog>
		</section>
	);
};

export default Contact;
