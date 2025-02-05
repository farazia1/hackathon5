"use client";

import { useState } from "react";
import { auth } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupDialog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isOpen, setIsOpen] = useState(false); // For opening/closing modal

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try { 
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Signed Up:", userCredential.user);
      setSuccess("Signup successful!");
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
      setTimeout(() => setIsOpen(false), 1500); // Close modal after success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Display error message
      } else {
        setError("An unexpected error occurred.");
      }
    }
  }    
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setError(""); // Clear errors when opening/closing modal
    setSuccess(""); // Clear success message
  };

  return (
    <div>
      {/* Button to open the dialog */}
      <button
        onClick={toggleModal}
        className="underline font-semibold hover:text-yellow-300"
      >
        Sign Up Now
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={toggleModal} // Close modal when clicking on the overlay
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              position: "relative",
              color: "#000", // Ensure text inside the modal is black
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 style={{ color: "#000" }}>Sign Up</h2>
            <form onSubmit={handleSignup}>
              {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}
              {success && (
                <p style={{ color: "green", marginBottom: "15px" }}>{success}</p>
              )}
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "5px", color: "#000" }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="password"
                  style={{ display: "block", marginBottom: "5px", color: "#000" }}
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={toggleModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                color: "#000", // Close button color
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupDialog;
