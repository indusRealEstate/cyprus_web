const Subscribe = () => {
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
      <button type="submit">Subscribe</button>
    </div>
  );
};

export default Subscribe;
