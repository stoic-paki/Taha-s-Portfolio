import React from "react";
import Titleheader from "./../components/TitleHeader";
import { useState, useRef } from "react";
import ContactExperience from "../components/ContactExperience";
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      setFormData({ name: "", email: "", message: "" });
    } catch(error){
      console.log("emailjs error" + error) 
    } finally{
      setLoading(false)
    }

  };

  return (
    <section className="flex-center section-padding" id="contact">
      <div className="w-full h-full md:px-10 px-5">
        <Titleheader title="Get in Touch With Me" sub="Contact Information" />
        <div className="mt-16 grid-12-cols">
          {/* left side  */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
                ref={formRef}
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="You email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={loading}>
                  {" "}
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? "sending ...":'sent message'}</p>
                    <div className="arrow-wrapper">
                      <img
                        src="/assets/public/images/arrow-down.svg"
                        alt="btn"
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* right side  */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactExperience/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
