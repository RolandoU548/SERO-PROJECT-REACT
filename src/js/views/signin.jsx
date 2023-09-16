import React from "react";
import { Link } from "react-router-dom";
import { Darkmode } from "../component/Darkmode";

export const SignIn = () => {
    return (
        <div className="overflow-hidden h-screen">
            <div className="flex items-center min-h-screen bg-gray-50 dark:bg-slate-800">
                <Darkmode className="text-[10%] absolute top-2 right-2" />
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex items-center justify-center p-3 sm:p-6 md:w-1/2">
                            <div className="w-90">
                                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700 dark:text-white">
                                    New User? Sign Up!
                                </h1>
                                <div className="flex items-center justify-center flex-col gap-4">
                                    <button className="px-2 py-1 w-full border flex justify-center gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 dark:text-white dark:focus:ring-gray-500 dark:focus:ring-offset-gray-200 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-offset-2 focus:ring-1 focus:ring-offset-2">
                                        <img
                                            className="w-6 h-6"
                                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                                            loading="lazy"
                                            alt="google logo"
                                        />
                                        <span>Sign Up with Google</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="py-1 px-2 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="mr-2"
                                            viewBox="0 0 1792 1792">
                                            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                                        </svg>
                                        Sign Up with GitHub
                                    </button>
                                </div>
                                <div className="my-4 border-b text-center">
                                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 dark:bg-slate-800 dark:text-white">
                                        Or sign up with e-mail
                                    </div>
                                </div>
                                <form
                                    onSubmit={e => {
                                        e.preventDefault();
                                    }}>
                                    <div>
                                        <label className="block text-sm dark:text-white">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-2 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="name@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mt-4 text-sm dark:text-white">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-2 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Password"
                                            type="password"
                                            required
                                        />
                                    </div>
                                    <p className="mt-4">
                                        <a
                                            className="text-sm text-blue-600 hover:underline"
                                            href="./forgot-password.html">
                                            Forgot your password?
                                        </a>
                                    </p>
                                    <div className="mx-auto max-w-xs">
                                        <p className="mt-6 text-xs text-gray-600 text-center dark:text-white">
                                            I agree to abide by SERØ Terms of
                                            Service and its Privacy Policy
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700">
                                        Sign Up
                                    </button>
                                </form>
                                <p className=" flex-1 items-center leading-none px-12 py-1 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white dark:bg-slate-800 dark:text-white transform translate-y-1/2">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="w-20 px-1 py-2 mt-3 text-xl underline underline-offset-8 font-medium leading-5 text-center text-gray-500  dark:bg-slate-800 dark:text-white">
                                        LogIn
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="h-32 md:h-auto md:w-1/2 hidden md:block">
                            <Link
                                to="/"
                                className="absolute z-40 top-8 right-64 mt-3 text-4xl text-gray-400 font-semibold ml-9">
                                SERØ.
                            </Link>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-auto h-full object-cover overflow-auto rounded-r-lg">
                                <source
                                    src="src/assets/media/Login_Video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
