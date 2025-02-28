import React, { useState } from "react";
import logo from "../../../assets/logo.png"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../context/authContext";

const SignUpForm = () => {
  const {SetTokenInLocalStorage} = useAuthContext()
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    password: "", 
    confirmPassword: "", 
    agreeTerms: false 
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debugging Step
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/registration`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
      console.log("Response Data:", responseData); // Debugging Step
  
      if (response.ok) {
        toast.success(responseData.message);
        navigate("/signIn");
      } else {
        toast.error(responseData.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error in SignUp Process:", error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
      >
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="StockSprint"
            className="mx-auto mb-3 h-8"
          />
          <h2 className="text-xl font-bold text-gray-800">
            Create an account
          </h2>
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="hello@stocksprint.in"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500  text-sm placeholder-gray-400"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-semibold">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500  text-sm placeholder-gray-400"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Terms of Service */}
        <p className="text-xs text-gray-500 mb-4">
          By continuing, you agree to our{" "}
          <Link href="#" className="text-blue-600 underline">
            terms of service.
          </Link>
        </p>

        {/* reCAPTCHA Placeholder */}
        <div className="border border-gray-300 rounded-md px-3 py-2 mb-4 flex items-center">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="form-checkbox h-4 w-4 text-purple-600"
            style={{ accentColor: "#6C63FF" }}
          />
          <label className="ml-2 text-sm text-gray-700">I’m not a robot</label>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-md py-2 text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          Sign up
        </button>

        {/* Divider */}
       

        {/* Already have an account? */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link  to="/signIn" className="text-blue-600 font-medium">
            Sign in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
