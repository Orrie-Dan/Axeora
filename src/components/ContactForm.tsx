import { useState, type FormEvent } from "react";
import FormLegalNotice from "./FormLegalNotice";

export const interestOptions = [
  { value: "ai", label: "AI infrastructure" },
  { value: "cloud", label: "Sovereign cloud" },
  { value: "cyber", label: "Cybersecurity" },
  { value: "dpi", label: "Digital public infrastructure" },
  { value: "cities", label: "Smart cities" },
  { value: "africa", label: "UAE–Africa programs" },
] as const;

export const interestBySlug: Record<string, string> = {
  "ai-infrastructure": "ai",
  "sovereign-cloud": "cloud",
  cybersecurity: "cyber",
  "digital-public-infrastructure": "dpi",
  "smart-cities": "cities",
};

type Props = {
  idPrefix?: string;
  defaultInterest?: string;
  submitLabel?: string;
};

export default function ContactForm({
  idPrefix = "",
  defaultInterest = "ai",
  submitLabel = "Talk to sales",
}: Props) {
  const [sent, setSent] = useState(false);
  const id = (name: string) => `${idPrefix}${name}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <h2>Thank you</h2>
        <p className="lede">
          Our team will follow up using the details you provided.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor={id("name")}>Full name *</label>
        <input id={id("name")} name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor={id("email")}>Work email *</label>
        <input id={id("email")} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor={id("org")}>Organisation *</label>
        <input id={id("org")} name="org" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor={id("interest")}>Interest</label>
        <select id={id("interest")} name="interest" defaultValue={defaultInterest}>
          {interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor={id("message")}>How can we help? *</label>
        <textarea id={id("message")} name="message" required />
      </div>
      <FormLegalNotice />
      <button className="btn btn-accent" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
