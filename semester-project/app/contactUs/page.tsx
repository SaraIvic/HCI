import { Metadata } from "next";
import "./style.css";
import Image from "next/image";
import Button from "../_components/Button/Button";

export const metadata: Metadata = {
  title: "Contact Us",
};

function ContactUs() {
  return (
    <div className="contact-us">
      <form className="contact-us-form">
        <h1>Contact Us</h1>
        <input type="text" id="name" name="name" placeholder="Name"></input>
        <input type="text" id="email" name="email" placeholder="E-mail"></input>
        <textarea id="message" name="message" placeholder="Message"></textarea>
        {/* <button type="submit">Send Message</button> */}
        <Button text="Send Message" href="" />
      </form>
      <Image
        className="contact-us-img"
        src="/contactUsCat-removebg.png"
        width={200}
        height={200}
        alt="Contact Us Cat"
      />
    </div>
  );
}

export default ContactUs;
