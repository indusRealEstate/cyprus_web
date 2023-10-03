"use client";
import { useRouter } from "next/navigation";

const Subscribe = () => {
  const route = useRouter();
  return (
    <div className="mailchimp-style1 white-version">
      <input
        type="email"
        className="form-control"
        placeholder="Your Email"
        style={{
          color: "black",
        }}
      />
      <button
        type="submit"
        onClick={() => {
          route.push("/#main");
        }}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
