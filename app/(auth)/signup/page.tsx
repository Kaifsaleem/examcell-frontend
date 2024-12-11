"use client"
import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [userType, setUserType] = useState("");

  // Function to handle the selection change
  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              {/* User Type Dropdown */}
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="userType"
                >
                  I am a <span className="text-red-500">*</span>
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="form-select w-full"
                  required
                >
                  <option value="">Select type</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Institute">Institute</option>
                </select>
              </div>

              {/* Common Fields */}
              {userType && (
                <>

                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="email"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </>
              )}

              {/* Additional Fields for Students */}
              {userType === "Student" && (
                <>
                <div>
                  <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="firstname"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                     
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="lastname"
                      >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your last name"
                      required
                      />
                  </div>
                  <div>

             
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="institueId"
                      >
                      Institute Id <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="instituteId"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your institute"
                      required
                      />
                  </div>
                  <div>

                       <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="course"
                    >
                    Course <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="course"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your course"
                    required
                    />
                  
                  </div>
                  <div>

                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="yearOfStudy"
                    >
                    Year Of Study <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="yearOfStudy"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your student ID"
                    required
                    />
                    </div>
                
                </>
              )}

              {/* Additional Fields for Teachers */}
              {userType === "Teacher" && (
                <>
                <div>
                  <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="firstname"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your first name"
                      required
                    />

                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="lastname"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                  <div>
                   <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="institueId"
                    >
                      Institute Id <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="instituteId"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your institute"
                      required
                    />
                  </div>
                  <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="department"
                  >
                    Department <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="department"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your department "
                    required
                  />
                </div>
                </>
              )}

              {/* Additional Fields for Institute */}
              {userType === "Institute" && (
                <>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="firstname"
                    >
                      Institute Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your first name"
                      required
                    />

                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="address"
                    >
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your address"
                      required
                    />
                  </div>
                 
                  
                </>
              )}

              {/* Password Field */}
              {userType && (
                <div>
                  <label
                    className="block text-sm font-medium text-indigo-200/65"
                    htmlFor="password"
                  >
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full"
                    placeholder="Password (at least 10 characters)"
                    required
                  />
                </div>
              )}
            </div>

            {/* Register Button */}
            {userType && (
              <div className="mt-6 space-y-5">
                <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                  Register
                </button>
                <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
                  or
                </div>
                <button className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300">
                  Sign In with Google
                </button>
              </div>
            )}
          </form>

          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-indigo-500" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
