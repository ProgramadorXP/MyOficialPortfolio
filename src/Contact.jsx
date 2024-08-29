import Input from "./components/Input";
import TitleSection from "./components/TitleSection";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import TextArea from "./components/TextArea";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState({ field: "", correct: null });
  const [email, setEmail] = useState({ field: "", correct: null });
  const [message, setMessage] = useState({ field: "", correct: null });
  const [formCorrect, setFormCorrect] = useState(null);

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^.{5,200}$/, // Letras y espacios, pueden llevar acentos.
  };
  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.correct === "true" &&
      email.correct === "true" &&
      message.correct === "true"
    ) {
      emailjs
        .sendForm(
          "service_nv6qdlh",
          "template_41gt3ho",
          form.current,
          "0HUzt91PWZgmN9qjI"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormCorrect(true);
            setName({ field: "", correct: null });
            setEmail({ field: "", correct: null });
            setMessage({ field: "", correct: null });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setFormCorrect(false);
    }
  };
  return (
    <section className="mt-20 p-5" id="contact_me">
      <TitleSection name="Contact Me" />
      <form
        ref={form}
        onSubmit={onSubmit}
        className="mt-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="max-w-xs flex flex-col items-end gap-6 sm:mt-6">
            <Input
              state={name}
              setState={setName}
              label="Name"
              type="text"
              name="name"
              regularExpression={expressions.name}
            />
            <Input
              state={email}
              setState={setEmail}
              label="Email"
              type="email"
              name="email"
              regularExpression={expressions.email}
            />
          </div>
          <div className="flex flex-col gap-6">
            <TextArea
              state={message}
              setState={setMessage}
              label="Message"
              name="message"
              regularExpression={expressions.message}
            />
            <div className="flex justify-center self-center sm:self-end">
              <button className="bg-zinc-900 dark:text-amber-600 dark:bg-white text-zinc-50 px-8 py-2 rounded-lg tracking-wide transition-all duration-500 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
      {formCorrect === false && (
        <div className="flex justify-center">
          <p className="bg-red-600 text-zinc-950 p-2 mt-6">
            <FontAwesomeIcon className="mr-2" icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </div>
      )}
      {formCorrect && (
        <div className="flex justify-center">
          <p className="bg-green-600 w-fit p-1">
            Mensaje enviado exitosamente!
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
