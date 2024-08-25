"use client";

import { ContactStateProps, SelectableButtonParam } from "@/constant/helper";
import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SelectableButton from "./selectable-button";
import Button from "../reusable/Button";

type Props = {
	message?: string | string[] | undefined;
	subject?: string | string[] | undefined;
};

const DisplayForm: FC<Props> = ({ message, subject }) => {
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

	useEffect(() => {
		if (
			message &&
			subject &&
			typeof message === "string" &&
			typeof subject === "string"
		) {
			setContactState({
				...contactState,
				subject,
				message,
			});
			setSelectedButton(subject);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message, subject]);

	const inputsClass: string =
		"px-2 py-4 rounded-md text-slate-100 bg-[#212529]";

	const sendEmail = (event: FormEvent) => {
		event.preventDefault();
		if (!formRef.current) {
			return;
		}

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		if (serviceId && templateId && publicKey) {
			emailjs
				.send(serviceId, templateId, contactState, publicKey)
				.then((data) => {
					setContactState(initialState);
					setOpen(data.status <= 299);
				})
				.catch(() => alert("Cannot send the email, please try again later."))
				.finally(() => {
					setIsContactSubmit(false);
				});
		}
	};

	const handleSubject = (subject: string): void => {
		setContactState({ ...contactState, subject });
		setSelectedButton(subject);
	};

	return (
		<>
			<form
				className="flex flex-col w-full gap-y-2"
				onSubmit={sendEmail}
				ref={formRef}>
				<input
					type="text"
					name="sender_name"
					id="sender_name"
					required
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
						text={"Question"}
						addEvent={handleSubject}
						isActive={selectedButton === SelectableButtonParam.question}
					/>
					<SelectableButton
						text={"Feedback"}
						addEvent={handleSubject}
						isActive={selectedButton === SelectableButtonParam.feedback}
					/>
					<SelectableButton
						text={"Work for you"}
						addEvent={handleSubject}
						isActive={selectedButton === SelectableButtonParam.work_for_you}
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
					disabled={isContactSubmit}
					type="submit"
					text="Submit"
					className="font-normal mt-2"
				/>
			</form>

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
		</>
	);
};

export default DisplayForm;
