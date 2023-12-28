import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 4rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            color: ${({ theme }) => theme.colors.helper};

            &:hover {
              background-color: ${({ theme }) => theme.colors.black};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.239619599522!2d77.63449707412947!3d12.892307787415787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ba2fedb99b%3A0x7e253e717e594148!2sTRUWEIGHT%20WELLNESS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1698905461773!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyqvkez"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            ></input>
            <textarea
              name="Message"
              placeholder="message"
              required
              autoComplete="off"
              col="30"
              rows="7"
            ></textarea>
            <input type="submit" value={"Send"}></input>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
