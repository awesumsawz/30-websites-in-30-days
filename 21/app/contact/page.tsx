"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
const [formState, setFormState] = useState({
name: "",
email: "",
message: "",
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<
"idle" | "success" | "error"
>("idle");

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setIsSubmitting(true);

try {
	const result = await emailjs.send(
		'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
		'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
		{
			from_name: formState.name,
			from_email: formState.email,
			message: formState.message,
		},
		'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
	);

	if (result.status === 200) {
		setSubmitStatus("success");
		setFormState({ name: "", email: "", message: "" });
	} else {
		setSubmitStatus("error");
	}
} catch (error) {
	console.error('Failed to send email:', error);
	setSubmitStatus("error");
} finally {
	setIsSubmitting(false);
}
};

return (
<motion.div
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.5 }}
	className="space-y-6"
>
	<div className="text-center">
	<h1 className="text-3xl font-pixel text-dracula-pink mb-4">
		Contact Me
	</h1>
	<p className="text-dracula-foreground">
		Get in touch for any inquiries or collaborations.
	</p>
	</div>

	<form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
	<div className="space-y-2">
		<label htmlFor="name" className="block font-pixel text-dracula-foreground">
		Name
		</label>
		<input
		id="name"
		type="text"
		required
		value={formState.name}
		onChange={(e) =>
			setFormState((prev) => ({ ...prev, name: e.target.value }))
		}
		className="w-full px-4 py-2 bg-dracula-background border-2 border-dracula-purple rounded-md focus:outline-none focus:ring-2 focus:ring-dracula-purple text-dracula-foreground placeholder-dracula-comment"
		placeholder="Your name"
		/>
	</div>

	<div className="space-y-2">
		<label htmlFor="email" className="block font-pixel text-dracula-foreground">
		Email
		</label>
		<input
		id="email"
		type="email"
		required
		value={formState.email}
		onChange={(e) =>
			setFormState((prev) => ({ ...prev, email: e.target.value }))
		}
		className="w-full px-4 py-2 bg-dracula-background border-2 border-dracula-purple rounded-md focus:outline-none focus:ring-2 focus:ring-dracula-purple text-dracula-foreground placeholder-dracula-comment"
		placeholder="your.email@example.com"
		/>
	</div>

	<div className="space-y-2">
		<label
		htmlFor="message"
		className="block font-pixel text-dracula-foreground"
		>
		Message
		</label>
		<textarea
		id="message"
		required
		value={formState.message}
		onChange={(e) =>
			setFormState((prev) => ({ ...prev, message: e.target.value }))
		}
		rows={5}
		className="w-full px-4 py-2 bg-dracula-background border-2 border-dracula-purple rounded-md focus:outline-none focus:ring-2 focus:ring-dracula-purple text-dracula-foreground placeholder-dracula-comment resize-none"
		placeholder="Your message here..."
		/>
	</div>

	<button
		type="submit"
		disabled={isSubmitting}
		className={`w-full py-3 font-pixel text-lg rounded-md transition-all duration-200 ${
		isSubmitting
			? "bg-dracula-comment cursor-not-allowed"
			: "bg-dracula-pink hover:bg-dracula-purple text-dracula-white"
		}`}
	>
		{isSubmitting ? "Sending..." : "Send Message"}
	</button>

	{submitStatus === "success" && (
		<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className="text-center text-dracula-green font-pixel"
		>
		Message sent successfully!
		</motion.p>
	)}

	{submitStatus === "error" && (
		<motion.p
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className="text-center text-dracula-red font-pixel"
		>
		Error sending message. Please try again.
		</motion.p>
	)}
	</form>
</motion.div>
);
}
