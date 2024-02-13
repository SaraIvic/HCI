import { Metadata } from "next";
import Image from "next/image";
import "./style.css";
import Button from "../_components/Button/Button";

export const metadata: Metadata = {
  title: "Get Involved",
};

function GetInvolved() {
  return (
    <div className="getInvolved">
      <div className="getInvolved-intro">
        <h1>Get Involved</h1>
        <h4>Become Part of the Transformation</h4>
        <p>
          Welcome to FurEver, where passion meets purpose. Your commitment to
          making a difference in the lives of animals is the heartbeat of our
          mission. Whether through your time or financial support, you play a
          vital role in creating a haven for these furry friends. Explore the
          ways you can get involved below and become a part of our journey in
          rescuing and rehoming animals in need.
        </p>
      </div>
      <div className="getInvolved-sections">
        <div className="getInvolved-section">
          <Image
            className="getInvolved-img"
            src="/donate.jpeg"
            width={450}
            height={250}
            alt="donate"
          />
          <h2>Be the Change - Volunteer with FurEver</h2>
          <p>
            Join our dedicated team of volunteers and be the driving force
            behind our mission. From hands-on animal care to event coordination,
            every contribution makes a lasting impact. Embrace the opportunity
            to connect with animals, fellow volunteers, and the community. Your
            time is a priceless gift that transforms the lives of these animals.
            Ready to make a difference? Discover the joy of volunteering with
            FurEver.
          </p>
          <Button text="Donate" href="" />
        </div>
        <div className="getInvolved-section">
          <Image
            className="getInvolved-img"
            src="/volonteer.jpeg"
            width={450}
            height={250}
            alt="volonteer"
          />
          <h2>Fuel the Mission - Support FurEver with a Donation</h2>
          <p>
            Every donation is a lifeline for the animals at FurEver. Your
            generosity allows us to provide love, care, and shelter to those in
            need. Choose from one-time contributions, monthly subscriptions, or
            support specific campaigns. Your financial support empowers us to
            continue rescuing and rehoming animals, creating success stories of
            hope and second chances. Join us in making a tangible difference in
            the lives of these furry companions.
          </p>
          <Button text="Volonteer" href="" />
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
