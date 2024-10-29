import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_fz3acvj",
        "template_5kt93an",
        formData,
        "VNoMX2XfJupyme0_v"
      )
      .then(() => {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setMessage("Failed to send message. Please try again.");
        console.error("Email sending error:", error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[720px] w-full">
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl py-[15px] px-[20px] text-foreground bg-background focus:bg-transparent outline-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl py-[15px] px-[20px] text-foreground bg-background focus:bg-transparent outline-primary"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl py-[15px] px-[20px] text-foreground bg-background focus:bg-transparent outline-primary"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:bg-primary bg-primary/90 text-card py-[15px] px-[20px] tracking-wide rounded-2xl w-full"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>
    </>
  );
};
