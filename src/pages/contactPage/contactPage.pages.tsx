import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { firestore } from "../../utils/firabase";
import "./contactPage.styles.css";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phnoRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e);
    const data = {
      name: nameRef.current!.value,
      phno: phnoRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };
    console.log(data);

    if (
      nameRef.current &&
      phnoRef.current &&
      emailRef.current &&
      messageRef.current
    ) {
      await firestore
        .collection("contactforms")
        .doc()
        .set(data)
        .then(() => {
          toast.success("Form Saved", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          console.log(error);
          toast.warn("Form not filled!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  }

  return (
    <div id="contact">
      <ToastContainer />
      <div id="contact-head">
        <div id="contact-back" />
        <h1>Contact</h1>
      </div>

      <div id="contact-info">
        <div id="get-in-touch">
          <h2>Get In Touch</h2>
          <div id="numbers">
            <h3>Numbers</h3>
            <p>e-commerce enquiries: - +91-7338095085</p>
            <p>enquiries on selling land: - +91-948718619</p>
          </div>
          <div id="email">
            <h3>Email</h3>
            <p>krishitech@gmail.com</p>
            <p>support@example.com</p>
          </div>
          <div id="work-time">
            <h3>Buisness Hours</h3>
            <p>Monday - Friday : 9am to 5pm</p>
            <p>Saturday : 10am to 3pm</p>
            <p>Sunday : Closed</p>
          </div>
        </div>
        <div id="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input
              required
              placeholder="Name"
              name="name"
              type="text"
              ref={nameRef}
            />
            <input
              required
              placeholder="Phone Number"
              name="phno"
              type="text"
              ref={phnoRef}
            />
            <input
              required
              placeholder="Email"
              name="email"
              type="text"
              ref={emailRef}
            />
            <input
              required
              placeholder="Message"
              name="message"
              type="textarea"
              ref={messageRef}
            />
            <button onClick={handleSubmit} id="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
