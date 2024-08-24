"use server";

import { ContactStateProps } from "@/constant/helper";

import emailjs from "@emailjs/browser";

export default async function sendEmailAction(contactState: ContactStateProps) {
	const serviceId = process.env.SERVICE_ID;
	const templateId = process.env.TEMPLATE_ID;
	const publicKey = process.env.PUBLIC_KEY;

	if (serviceId && templateId && publicKey) {
		const response = await emailjs.send(
			serviceId,
			templateId,
			contactState,
			publicKey,
		);
		return response.status <= 299;
	}

	return false;
}
