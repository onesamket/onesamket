import { useState } from "react";
import { motion } from 'framer-motion';
const Contact = () => {
    const [openForm, setOpenForm] = useState(false);
    return (
        <main id="contact" className="py-14 min-h-1/2">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">

                    <p className="text-gray-300 text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="text-gray-300">
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                    {
                        !openForm && <button onClick={() => setOpenForm(prev => !prev)} className="btn btn-primary">Get in touch</button>
                    }
                </div>
                {
                    openForm &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5
                        }}
                        className="mt-12 max-w-lg mx-auto">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                <div>
                                    <label className="font-medium">
                                        Full name
                                    </label>
                                    <input
                                        placeholder="John Doe"
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="one@love.com"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea
                                    required
                                    placeholder="say hello 👋👋"
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                            </div>
                            <button
                                className="w-full px-4 py-2 btn btn-primary rounded-lg duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                }
            </div>
        </main>
    )
}
export default Contact;