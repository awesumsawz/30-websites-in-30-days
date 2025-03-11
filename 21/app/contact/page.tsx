"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
	// Here you would typically send the form data to your backend
	// For now, we'll simulate a successful submission
	await new Promise((resolve) => setTimeout(resolve, 1000));
	setSubmitStatus("success");
	setFormState({ name: "", email: "", message: "" });
} catch (error) {
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
	<h1 className="text-3xl font-pixel text-dracula-purple mb-4">
		Contact Us
	</h1>
	<p className="text-dracula-cyan">
		Get in touch with us for any inquiries or collaborations.
	</p>
	</div>

	<form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
	<div className="space-y-2">
		<label htmlFor="name" className="block font-pixel text-dracula-pink">
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
		className="w-full px-4 py-2 bg-dracula-current border border-dracula-purple rounded-md focus:outline-none focus:ring-2 focus:ring-dracula-purple text-dracula-foreground"
		/>
	</div>

	<div className="space-y-2">
		<label htmlFor="email" className="block font-pixel text-dracula-pink">
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
		className="w-full px-4 py-2 bg-dracula-current border border-dracula-purple rounded-md focus:outline-none focus:ring-2 focus:ring-dracula-purple text-dracula-foreground"
		/>
	</div>

	<div className="space-y-2">
		<label
		htmlFor="message"
		className="block font-pixel text-dracula-pink"
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
		className="w-full px-4 py-2 bg-dracula-current border border-dracula-purple rounded-md focus:outline-none focus:ring-2 focus:ring-dracula-purple text-dracula-foreground resize-none"
		/>
	</div>

	<button
		type="submit"
		disabled={isSubmitting}
		className={`w-full py-3 font-pixel text-lg rounded-md transition-all duration-200 ${
		isSubmitting
			? "bg-dracula-comment cursor-not-allowed"
			: "bg-dracula-purple hover:bg-dracula-pink text-dracula-background"
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
