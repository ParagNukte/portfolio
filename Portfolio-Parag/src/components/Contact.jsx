import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import InputText from "../assistcomponents/inputText";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link

function Contact() {
  // State for storing form data
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  // Initialize navigate function
  const navigate = useNavigate();

  // Handle input changes for each field
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get name and value of the input field
    setFormData((prevState) => ({
      ...prevState, // Copy previous state
      [name]: value, // Update the value of the specific input field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    const serviceID = "service_i7wnz4i"; // Your service ID
    const templateID = "template_j36s1qh";

    // Send email using EmailJS
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          message: formData.message,
        },
        "ANOeiViPU0uodqG7b"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result); // Show success message
          // Navigate to the home page after successful submission
          navigate("/");
        },
        (error) => {
          console.error(error);
          alert("Error sending message."); // Show error message
        }
      );
  };

  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in touch
            </h2>
            <p className="mb-4 text-white/85 w-8/12">
              I&apos;m always open to new opportunities and collaboration. Feel free
              to reach me out!
            </p>

            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src="facebook.png" alt="Facebook" className="h-6 w-6" />
              </Link>
              <Link
                to="https://github.com/ParagNukte" target="_blank" rel="noopener noreferrer" 
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src="githubicon.png" alt="GitHub" className="h-6 w-6" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/paragnukte"
                className="text-foreground/60 hover:text-foreground/80"
                target="_blank" // Opening LinkedIn in a new tab
                rel="noopener noreferrer"
              >
                <img src="linkedin.png" alt="LinkedIn" className="h-6 w-6" />
              </Link>
              <Link
                to="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src="twitter.png" alt="Twitter" className="h-6 w-6" />
              </Link>
            </div>
            <DotLottieReact
              src="https://lottie.host/ac511be2-f13f-41ec-bc43-45f3a5f47c98/Avw7rjwS3A.lottie"
              loop
              autoplay
              speed={0.5}
              width={40}
              height={30}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>

            <InputText
              labelfor="Name"
              type="text"
              placeholder="Full Name"
              idOf="from_name"
              name="from_name" // Input name (matches the template placeholder)
              value={formData.from_name}
              onChange={(e) => handleInputChange(e)}
            />
            <InputText
              labelfor="Email"
              type="email"
              placeholder="Enter Email"
              idOf="reply_to"
              name="reply_to" // Input name (matches the template placeholder)
              value={formData.reply_to}
              onChange={(e) => handleInputChange(e)}
            />
            <InputText
              labelfor="Message"
              type="text-box"
              placeholder="Write what you want to tell me"
              idOf="message"
              name="message" // Input name (matches the template placeholder)
              value={formData.message}
              onChange={(e) => handleInputChange(e)}
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
