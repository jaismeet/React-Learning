import { BriefcaseBusiness, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { useMemo, useState } from "react";
import { services } from "../../data/siteData.js";

const initialForm = {
  email: "",
  interest: services[0]?.title ?? "",
  message: "",
  name: "",
  phone: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return form.name.trim().length > 1 && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 9;
  }, [form]);

  const updateField = (field, value) => {
    setSubmitted(false);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="bg-white px-6 py-24 text-neutral-800">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="animate-slide-left">
          <h2 className="text-4xl leading-tight">Start a conversation</h2>
          <div className="mt-5 h-[3px] w-20 bg-[var(--teal)]" />
          <p className="mt-7 text-lg leading-relaxed">
            Tell us what you are trying to build, fix, or improve. The form is ready for a backend
            connection later, and currently gives instant validation and confirmation.
          </p>
          <div className="mt-8 grid gap-4 text-lg">
            <p className="flex items-center gap-3">
              <Phone size={20} className="text-[var(--teal)]" />
              +44 203 129 2722
            </p>
            <p className="flex items-center gap-3">
              <Mail size={20} className="text-[var(--teal)]" />
              hello@axtrum.com
            </p>
          </div>
        </div>

        <form className="animate-slide-up grid gap-4 rounded-md border border-neutral-200 bg-white p-6 shadow-[0_18px_48px_rgb(15_23_42_/_10%)]" onSubmit={submitForm}>
          <LabeledInput
            icon={User}
            label="Name"
            onChange={(value) => updateField("name", value)}
            placeholder="Your name"
            value={form.name}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <LabeledInput
              icon={Mail}
              label="Email"
              onChange={(value) => updateField("email", value)}
              placeholder="you@example.com"
              type="email"
              value={form.email}
            />
            <LabeledInput
              icon={Phone}
              label="Phone"
              onChange={(value) => updateField("phone", value)}
              placeholder="+91..."
              value={form.phone}
            />
          </div>
          <label className="grid gap-2 text-base font-bold">
            <span className="flex items-center gap-2">
              <BriefcaseBusiness size={18} className="text-[var(--teal)]" />
              I am interested in
            </span>
            <select
              value={form.interest}
              onChange={(event) => updateField("interest", event.target.value)}
              className="rounded-md border border-neutral-300 bg-neutral-50 px-4 py-3 text-base font-normal outline-none transition focus:border-[var(--teal)] focus:bg-white focus:shadow-[0_0_0_3px_rgb(29_156_188_/_12%)]"
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-base font-bold">
            <span className="flex items-center gap-2">
              <MessageSquare size={18} className="text-[var(--teal)]" />
              Message
            </span>
            <textarea
              rows="5"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Briefly describe your requirement"
              className="min-h-36 resize-y rounded-md border border-neutral-300 bg-neutral-50 px-4 py-3 text-base font-normal outline-none transition focus:border-[var(--teal)] focus:bg-white focus:shadow-[0_0_0_3px_rgb(29_156_188_/_12%)]"
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className={`sans-copy text-sm ${submitted ? "text-[var(--teal)]" : "text-neutral-500"}`}>
              {submitted ? "Thanks. Your enquiry is ready to connect to a backend." : "Name, valid email, and message are required."}
            </p>
            <button
              type="submit"
              disabled={!isValid}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--teal)] px-6 py-3 text-white shadow-[0_10px_24px_rgb(29_156_188_/_25%)] transition enabled:hover:-translate-y-0.5 enabled:hover:bg-[var(--teal-dark)] disabled:opacity-50"
            >
              <Send size={18} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function LabeledInput({ icon: Icon, label, onChange, placeholder, type = "text", value }) {
  return (
    <label className="grid gap-2 text-base font-bold">
      <span className="flex items-center gap-2">
        <Icon size={18} className="text-[var(--teal)]" />
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-md border border-neutral-300 bg-neutral-50 px-4 py-3 text-base font-normal outline-none transition focus:border-[var(--teal)] focus:bg-white focus:shadow-[0_0_0_3px_rgb(29_156_188_/_12%)]"
      />
    </label>
  );
}
