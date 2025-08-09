import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdMovie } from "react-icons/md";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email && password) {
        navigate("/");
      } else {
        setError("Please fill in all fields");
      }
    } catch {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center">
            <MdMovie className="text-red-600 text-3xl mr-2" />
            <span className="text-2xl font-bold">CINEMAX</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

            {error && (
              <div className="bg-red-600 text-white p-3 rounded mb-4 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdEmail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 w-full pl-10 pr-3 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 w-full pl-10 pr-3 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-gray-400 hover:text-red-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition-colors ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-2 px-4 border border-gray-700 rounded hover:bg-gray-700 transition-colors">
                  <FaGoogle className="mr-2" />
                  Google
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-700 rounded hover:bg-gray-700 transition-colors">
                  <FaFacebook className="mr-2" />
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-500 hover:text-red-400 font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
