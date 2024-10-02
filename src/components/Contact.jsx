import React from "react";
import { useRef, useState } from "react";
import "../styles/contact.css";

function Contact() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);
    form.current.name.value = "";
    form.current.subject.value = "";
    form.current.message.value = "";
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit} ref={form}>
      <h5>Contacter l'artisan</h5>
      <div className="mb-3 row">
        <div className=" col-lg-6 col-md-6">
          <label htmlFor="name" className="form-label">
            Nom | Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Doe John"
            required
          ></input>
        </div>
        <div className=" col-lg-6 col-md-6">
          <label htmlFor="subject" className="form-label">
            Objet
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Objet"
            required
          ></input>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="3"
          required
        ></textarea>
      </div>
      {!isFormSubmitted && (
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      )}
      {isFormSubmitted && (
        <div>
          <p className="text-center">Message envoyé !</p>
          <p className="text-center">Une réponse vous sera apporté sous 48 heures.</p>
        </div>
      )}
    </form>
  );
}

export default Contact;
